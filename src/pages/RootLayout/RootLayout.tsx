import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../../widgets/header";
import { useEthereumStore } from "../../entities";
import { observer } from "mobx-react-lite";
import { Background } from "./Background";
import { WalletConnectForm } from "../../features/connect-wallet";

export interface IRootProps {}

export const RootLayout: FC<IRootProps> = observer(() => {
  const {
    ethereumStore: { initialized, hasSigner },
  } = useEthereumStore();

  return (
    <>
      {initialized && (
        <div className="flex flex-col relative w-full h-full">
          <Header />
          <main className="container mx-auto grow px-4 pt-8">
            {hasSigner ? <Outlet /> : <WalletConnectForm />}
          </main>
          <Background />
        </div>
      )}
    </>
  );
});
