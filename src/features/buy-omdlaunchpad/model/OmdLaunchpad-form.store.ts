import { makeAutoObservable } from "mobx";
import { Contract } from "@ethersproject/contracts";
import { TOKEN_ABI, TOKEN_ADDRESS, TOKEN_SYMBOLS } from "../../../entities";
import { JsonRpcSigner } from "@ethersproject/providers";
import { BaseTokensFormSubmitData } from "../../base-tokens-form";
import { TEST_SWAP_CONTRACT_DATA } from "../constants";
import { formatUnits, parseUnits } from "@ethersproject/units";
import { SwapStatus } from "../../swap-tokens";
import web3 from 'web3';

export class OmdLaunchpadFormStore {
  private readonly _sourceContract: Contract;

  private readonly _destinationContract: Contract;

  private _swapContract: Contract;

  private _exchangeRate: number = 0;

  private _isInitialized: boolean = false;

  private _swapStatus: SwapStatus = SwapStatus.READY;

  constructor(private _signer: JsonRpcSigner) {
    makeAutoObservable(this);

    this._sourceContract = new Contract(
      TOKEN_ADDRESS.OMD,
      TOKEN_ABI.OMD,
      _signer
    );

    this._destinationContract = new Contract(
      TOKEN_ADDRESS.omdwCRB,
      TOKEN_ABI.omdwCRB,
      _signer
    );


    this._swapContract = new Contract(
      TEST_SWAP_CONTRACT_DATA.address,
      TEST_SWAP_CONTRACT_DATA.abi,
      _signer
    );

    this.init();
  }

  private init = async () => {
    try {
      const bigNumber = await this._swapContract.myPrice(
        this._sourceContract.address,
        web3.utils.asciiToHex(TOKEN_SYMBOLS.OMD)
        );
      this.exchangeRate = +formatUnits(bigNumber, "6");
    } catch (e) {
      console.log(e);
    } finally {
      this.isInitialized = true;
    }
  };

  public onSubmit = async ({ sourceAmount }: BaseTokensFormSubmitData) => {
    this.swapStatus = SwapStatus.STARTING;
    try {
      const decimals = await this._sourceContract.decimals();
      const unit256Amount = parseUnits(sourceAmount, decimals);

      this.swapStatus = SwapStatus.AWAITING_CONFIRM;
      const approveTransaction = await this._sourceContract.approve(
        this._swapContract.address,
        unit256Amount
      );

      this.swapStatus = SwapStatus.AWAITING_BLOCK_MINING;
      await approveTransaction.wait();

      this.swapStatus = SwapStatus.AWAITING_CONFIRM;
      const buyTransaction = await this._swapContract.buyToken(
        web3.utils.asciiToHex(TOKEN_SYMBOLS.OMD),
        unit256Amount
      );

      this.swapStatus = SwapStatus.AWAITING_BLOCK_MINING;
      await buyTransaction.wait();

      this.swapStatus = SwapStatus.SUCCESS;
    } catch (e) {
      this.swapStatus = SwapStatus.ERROR;
      console.log(e);
    }
  };

  public calculateDestinationAmount = (sourceAmount: string): string => {
    return this._exchangeRate.toString() === "0"
      ? "0"
      : (+sourceAmount / this._exchangeRate).toString();
  };

  public get sourceContract(): Contract {
    return this._sourceContract;
  }

  public get destinationContract(): Contract {
    return this._destinationContract;
  }

  public get isLoading(): boolean {
    return (
      !this._isInitialized ||
      [
        SwapStatus.STARTING,
        SwapStatus.AWAITING_CONFIRM,
        SwapStatus.AWAITING_BLOCK_MINING,
      ].includes(this._swapStatus)
    );
  }

  public get swapStatus(): SwapStatus {
    return this._swapStatus;
  }

  private set isInitialized(value: boolean) {
    this._isInitialized = value;
  }

  private set exchangeRate(value: number) {
    this._exchangeRate = value;
  }

  private set swapStatus(value: SwapStatus) {
    this._swapStatus = value;
  }
}
