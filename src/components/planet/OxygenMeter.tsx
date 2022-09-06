import { formatAsPercentage } from "../../utils";

interface OxygenMeterProps {
  oxygen: number;
}

export const OxygenMeter: React.FC<OxygenMeterProps> = ({ oxygen }) => {
  return <span>{formatAsPercentage(oxygen)}</span>;
};
