"use client";
import "./RiskScenario.scss";
import Button from "../../components/button/Button";
import Card2 from "../../components/card2/Card2";
import CustomInput from "../../components/custominput/CustomInput";
import { IoMdArrowDropdown } from "react-icons/io";

import { IoArrowBack } from "react-icons/io5";
import Sidebar from "@/app/sidebar/page";

import { useState } from "react";
import Modal from "@/app/components/modal/Modal";

function RiskScenario() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const riskScenarioData = [
    {
      RiskID: "RS-8306432",
      RiskScenario: "Confidentiality of system ABC is compromised.",
      RiskDescription:
        "This risk scenario occurs when sensitive data in a system is disclosed to unauthorized users.",
      TagKey: "Industry",
      TagValue: "Healthcare",
    },
    {
      RiskId: "RS-8306433",
      "Risk Scenario": "Integrity of data stored in system ABC is compromised.",
      RiskDescription:
        "This risk scenario occurs when sensitive data is tampered with.",
      TagKey: "Industry",
      TagValue: "Healthcare",
    },
    {
      RiskId: "RS-8306434",
      RiskScenario:
        "System ABC is operationally unavailable for an extended time period.",
      RiskDescription:
        "This scenario occurs when the system is down and not accessible.",
      TagKey: "Industry",
      TagValue: "Healthcare",
    },
    {
      RiskId: "RS-8306435",
      RiskScenario: "Confidentiality of system XYZ is compromised.",
      RiskDescription:
        "This risk scenario occurs when sensitive data in a system is disclosed to unauthorized users.",
      TagKey: "Industry",
      TagValue: "Banking",
    },
    {
      RiskId: "RS-8306436",
      RiskScenario: "Integrity of data stored in system XYZ is compromised.",
      RiskDescription:
        "This risk scenario occurs when sensitive data is tampered with.",
      TagKey: "Industry",
      TagValue: "Banking",
    },
    {
      RiskId: "RS-8306437",
      RiskScenario:
        "System XYZ is operationally unavailable for an extended time period.",
      RiskDescription:
        "This scenario occurs when the system is down and not accessible.",
      TagKey: "Industry",
      TagValue: "Banking",
    },
    {
      RiskId: "RS-8306438",
      RiskScenario: "Confidentiality of system KLM is compromised.",
      RiskDescription:
        "This risk scenario occurs when sensitive data in a system is disclosed to unauthorized users.",
      TagKey: "Industry",
      TagValue: "Technology",
    },
    {
      RiskId: "RS-8306439",
      RiskScenario: "Integrity of data stored in system KLM is compromised.",
      RiskDescription:
        "This risk scenario occurs when sensitive data is tampered with.",
      TagKey: "Industry",
      TagValue: "Technology",
    },
    {
      RiskId: "RS-8306440",
      RiskScenario:
        "System KLM is operationally unavailable for an extended time period.",
      RiskDescription:
        "This scenario occurs when the system is down and not accessible.",
      TagKey: "Industry",
      TagValue: "Technology",
    },
  ];

  const handleModal = () => {
    console.log(isModalOpen);
    setIsModalOpen(true);
    console.log(isModalOpen);
  };
  return (
    <div className="risk-container-main">
      <Sidebar />
      <div className="risk-container">
        <header>
          <a href="#">
            <IoArrowBack />
            <span>Library/Risk Scenarios</span>
          </a>
          <Button
            type="button"
            name="Add Risk Scenario"
            onClick={handleModal}
          />
        </header>
        <main>
          <CustomInput
            label="Search"
            type="search"
            name="search"
            placeholder="Search by keywords"
          />
          <div className="right">
            <Button
              bgColor="white"
              color="black"
              name="Sort: RiskId (Ascending) "
            />
            <Button bgColor="white" color="black" name="Filter " />
          </div>
        </main>
        <section className="card2-container">
          <div>
            {riskScenarioData.map((risk) => (
              <Card2
                key={risk.RiskId}
                riskId={risk.RiskId}
                tagKey={risk.TagKey}
                tagValue={risk.TagValue}
                riskScenario={risk.RiskScenario}
              />
            ))}
          </div>
        </section>
      </div>
      {isModalOpen && <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />}
    </div>
  );
}

export default RiskScenario;
