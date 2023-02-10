import "./index.scss";

interface IBigBannerProps {
  label: string;
}

const BigBanner = ({ label }: IBigBannerProps) => {
  return (
    <div className="big-banner-container">
      <h1 className="title">{label}</h1>
    </div>
  );
};

export { BigBanner };
