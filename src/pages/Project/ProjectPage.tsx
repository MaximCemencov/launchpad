import { FC } from "react";
import { TigrForm } from "../../features/buy-tigr";
import { useParams } from "react-router";
import { OMDLAUNCHPADForm } from "../../features/buy-omdlaunchpad";
import { CRForm } from "../../features/buy-cr";

export const ProjectPage: FC = () => {
  const params = useParams();
  return (
    <div className="container mx-auto p-4 max-w-2xl">
      {params.symbol === 'omdwTigr' ? <TigrForm /> : null}
      {params.symbol === 'omdlaunchpad' ? <OMDLAUNCHPADForm /> : null}
      {params.symbol === 'omdwCRB' ? <CRForm /> : null}
    </div>
  );
};
