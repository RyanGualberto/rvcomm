import "./index.scss";
interface IBannerProps {
  title: string;
}

const BannerTitle = ({ title }: IBannerProps) => {
  return (
    <div className="banner-title">
      <h1>{title}</h1>
    </div>
  );
};

export { BannerTitle };
