"use client";

import { Flex, Tabs } from "antd";
import Image from "next/image";
import PlayerList from "../_components/PlayerList";
import PlayerInformation from "../_components/PlayerInformation";

export default function PrePortalSearch() {
  return (
    <Flex>
      <div className="main-container">
        <div className="grid grid-cols-12 gap-4 mb-4">
          <div className="col-span-9 card">
            <div className="player-img">
              <Image src="/plyer-b.png" alt="abc" width={250} height={250} />
              <ul>
                <li>
                  <i className="icon-teacher"></i> Jackson HS
                </li>
                <li>
                  <i className="icon-receipt-item"></i> 6&apos;2&quot;, 225 lbs
                </li>
                <li>
                  <i className="icon-calendar-1"></i> RFR
                </li>
                <li>
                  <i className="icon-location"></i> New York, NY
                </li>
              </ul>
            </div>
            <div className="detail-box">
              <span>Active</span>ID AX30902
              <h3>Bryce Shaun</h3>
              <div className="rating">4.2</div>
            </div>
          </div>
          <div className="col-span-3 card">2</div>

          <div className="col-span-8 card">
            <PlayerInformation />
          </div>
          <div className="col-span-4 card">2</div>

          <div className="col-span-12 card">
            <PlayerList />
          </div>
        </div>
      </div>
    </Flex>
  );
}
