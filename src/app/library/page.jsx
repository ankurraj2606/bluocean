import Card from "../components/card/Card";
import Sidebar from "../sidebar/page";
import "./Library.scss";
const Library = () => {
  const libraryItems = [
    {
      title: "Risk Scenarios",
      text: "Anticipate and address potential cybersecurity risks to business.",
      footerText: "All Scenarios:40 Published:32 Disabled:3 Draft:5",
    },
    {
      title: "Assessment",
      text: "Assess risk scenarios to identify net risk scores.",
      footerText: "",
    },
    {
      title: "Reports",
      text: "Generate reports for the business and security leaders.",
      footerText: "",
    },
  ];
  return (
    <div className="library-container">
      <Sidebar />
      <div className="card-container">
        {libraryItems.map((item) => (
          <Card
            key={item.title}
            title={item.title}
            text={item.text}
            footerText={item.footerText}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
