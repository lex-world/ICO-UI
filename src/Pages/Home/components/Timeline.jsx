import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

function TimelineContainer() {
  return (
    <div className="timeline__container">
      <Timeline position={window.innerWidth >= 992 ? "alternate" : "right"}>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent data-aos="fade-up-left">
            <h1 className="title">Quarter 1</h1>
            <div className="p">
              <ul>
                <li>
                  <b>1.1 Project Landing Page Introduction </b>
                  <br />
                  Landing Page will be live on both centralized(Google
                  Firebase), and decentralized(IPFS) hosting platforms, thus no
                  technical faults keeps gamers, users, investors, and traders
                  away from updates and informations.
                </li>
                <li>
                  <b>1.2 Build Community & Build Connections</b>
                  <br />
                  Partnerships, Brand Advocations with existing decentralized
                  platforms for playpoint's betterment and support.
                </li>
                <li>
                  <b>1.3 Token Deployment & Pre, Private-Token Sale</b>
                  <br />
                  ARC20 Token(PPT) Smart Contract (
                  <i>Backed by: OpenZeppelin</i>) will be live and audited.
                  Source code will be open sourced on GitHub.
                </li>
              </ul>
            </div>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent data-aos="fade-up-right">
            <h1 className="title">Quarter 2</h1>
            <div className="p">
              <ul>
                <li>
                  <b>2.1 Crowdsale & CEX, DEX Listings </b>
                  <br />
                  Crowdsale Smart Contract (<i>Backed by: OpenZeppelin</i>) will
                  be audited, deployed and User Interface will be live.
                  Playpoint will start to be listed on centralized, and
                  decentralized exchanges for <span>#1 traders</span>.
                </li>
                <li>
                  <b>2.2 Staking & Liquidity Platform</b>
                  <br />
                  Staking & Liquidity platform will be introduced to{" "}
                  <span>#2 investors</span>
                  with cross-bridge chain supports(
                  <i>Note: Base Network will still be Avalanche Ecosystem.</i>).
                </li>
                <li>
                  <b>2.3 Viable Product(VP) Gaming/Betting Platform</b>
                  <br />
                  As we're primarily focused for P2E as per our philosophy on
                  matter. We'll introduce Viable Platoform - VP(Beta) for{" "}
                  <span>#3 gamers</span>.
                </li>
              </ul>
            </div>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
          </TimelineSeparator>
          <TimelineContent data-aos="fade-up-left">
            <h1 className="title">
              Q3-Loading
              <span className="animate__flash animate__slower animate__animated animate__infinite">
                .
              </span>
              <span className="animate__flash animate__slower animate__animated animate__infinite animate__delay-0.3s">
                .
              </span>
              <span className="animate__flash animate__slower animate__animated animate__infinite animate__delay-0.6s">
                .
              </span>
            </h1>
            <div></div>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
}

export default TimelineContainer;
