import { FC, useState } from "react";
import { BaseTokensForm } from "../../base-tokens-form";
import { useEthereumStore } from "../../../entities";
import { observer } from "mobx-react-lite";
import { LaunchpadFormStore } from "../model";
import { SWAP_STATUS_LABELS } from "../../swap-tokens";
import { TokenAddButton } from "../../add-token-to-metamask";

export const LaunchPadForm: FC = observer(() => {
  const {
    ethereumStore: { signer },
  } = useEthereumStore();

  const [store] = useState(() => new LaunchpadFormStore(signer));
  const {
    isLoading,
    sourceContract,
    destinationContract,
    onSubmit,
    calculateDestinationAmount,
    swapStatus,
    symbol,
  } = store;


  return (
    <>
      <BaseTokensForm
        title={`Покупка ${symbol}`}
        onSubmit={onSubmit}
        sourceContract={sourceContract}
        destinationContract={destinationContract}
        calculateDestinationAmount={calculateDestinationAmount}
        loadingText={SWAP_STATUS_LABELS[swapStatus]}
        isLoading={isLoading}
        />
      <TokenAddButton
        className="w-full"
        text={`Добавить токен ${symbol} в MetaMask`}
        tokenSymbol={symbol}
      >
      </TokenAddButton>
    </>
  );
});
