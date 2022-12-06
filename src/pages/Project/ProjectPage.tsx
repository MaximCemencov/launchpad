import { FC } from "react";
import { useParams } from "react-router";
import { LaunchPadForm } from "../../features/launchpad";

export const ProjectPage: FC = () => {
  const params = useParams();
  return (
    <div className="container mx-auto p-4 max-w-2xl">
      {params.symbol !== '' ? <LaunchPadForm /> : null}
    </div>
  );
};
