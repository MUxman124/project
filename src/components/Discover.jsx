import DiscoverSingle from "./DiscoverSingle";
import "../styles/Discover.scss";
import "../styles/DiscoverSingle.scss";
import discoverimg1 from "../images/discoverimg1.jpg";
import discoverimg2 from "../images/discoverimg2.jpg";
import discoverimg3 from "../images/discoverimg3.jpg";

const Discover = () => {
  const data = [
    {
      image: discoverimg1,
      title: "Astral Tequila",
      tag: "Sprite",
    },
    {
      image: discoverimg2,
      title: "Astral Tequila",
      tag: "Sprite",
    },
    {
      image: discoverimg3,
      title: "Astral Tequila",
      tag: "Sprite",
    },
    {
      image: discoverimg1,
      title: "Astral Tequila",
      tag: "Sprite",
    },
  ];

  return (
    <div>
      <h1 className="title">Discover New & Noteworthy</h1>
      <div className="itemss">
        {data &&
          data.map((item, index) => <DiscoverSingle key={index} data={item} />)}
      </div>
    </div>
  );
};

export default Discover;
