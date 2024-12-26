"use client";

import { Flex, Progress, Skeleton, Tooltip } from "antd";
import Image from "next/image";
import PlayerList from "../_components/PlayerList";
import PlayerInformation from "../_components/PlayerInformation";
import Link from "next/link";

export default function PrePortalSearch() {
  return (
    <Flex>
      <div className="main-container">
        <div className="grid grid-cols-12 gap-4 mb-4">
          <div className="col-span-9 card">
            <div className="flex w-100">
              <div className="player-img">
                <Image src="/plyer-b.png" alt="abc" width={250} height={250} />
                <ul>
                  <li>
                    <i className="icon-teacher"></i> Jackson HS
                  </li>
                  <li>
                    <i className="icon-receipt-item"></i> 6&apos;2&quot;, 225
                    lbs
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
                <span className="badge">
                  <i className="icon-check-2"></i>Active
                </span>
                ID AX30902
                <h3>
                  Bryce Shaun
                  <span className="rating">
                    <Image
                      src="/success-star.svg"
                      alt="success"
                      width={22}
                      height={22}
                      className="mr-1"
                    />
                    4.2
                    <Link href="/" className="icon-edit-2"></Link>
                  </span>
                </h3>
                <div className="arrow-bg">
                  <h5 className="school">
                    <Image src="/b.svg" alt="abc" width={20} height={24} />
                    Kansas City School (FL)
                  </h5>
                  <h5>
                    <Image src="/a.svg" alt="abc" width={26} height={26} />
                    Andover Philips Academy (NY)
                  </h5>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-2 card">
                    <div className="grid grid-cols-2 gap-4 career-info">
                      <div>
                        <span>Entered On Portal</span>
                        <h6>03/06/2023</h6>
                      </div>
                      <div>
                        <span>Coming From</span>
                        <h6>D1-Patriot League</h6>
                      </div>
                      <div>
                        <span>Scholarship</span>
                        <h6>Partial</h6>
                      </div>
                      <div>
                        <span>Expected Grad Year</span>
                        <h6 className="flex">
                          <Image
                            className="mr-1"
                            src={"/tick.svg"}
                            alt={"Tick"}
                            width={20}
                            height={20}
                          />
                          Yes - 08/20/2025
                        </h6>
                      </div>
                      <div className="col-span-2">
                        <span>Multiple Transfer From</span>
                        <h6 className="flex mb-0">
                          <Image
                            className="mr-1"
                            src={"/tick.svg"}
                            alt={"Tick"}
                            width={20}
                            height={20}
                          />
                          Yes - Massachusetts Institute of Technology
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="achivement-list">
                    <ul>
                      <li>
                        <Image
                          src="/cupA.svg"
                          alt="abc"
                          width={36}
                          height={36}
                        />
                        <Tooltip title="2024-RB">
                          <span>2024-RB</span>
                        </Tooltip>
                      </li>
                      <li>
                        <Image
                          src="/cupR.svg"
                          alt="abc"
                          width={36}
                          height={36}
                        />
                        <Tooltip title="2019 - RB">
                          <span>2019 - RB</span>
                        </Tooltip>
                      </li>
                      <li>
                        <Image
                          src="/madal-1.svg"
                          alt="abc"
                          width={18}
                          height={36}
                          className="madal"
                        />
                        <Tooltip title="Some hover information can come">
                          <span>Team Name First</span>
                        </Tooltip>
                      </li>
                      <li>
                        <Image
                          src="/madal-2.svg"
                          alt="abc"
                          width={18}
                          height={36}
                          className="madal"
                        />

                        <Tooltip
                          color="var(--primary)"
                          title="Some hover information can come"
                        >
                          <span>Team Name Second</span>
                        </Tooltip>
                      </li>
                      <li>
                        <Image
                          src="/madal-3.svg"
                          alt="abc"
                          width={18}
                          height={36}
                          className="madal"
                        />
                        <Tooltip title="Some hover information can come">
                          <span>Team Name Third</span>
                        </Tooltip>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3">
            <div className="grid grid-cols-1 gap-4">
              <div className="card progress">
                <h5>Player Statistics</h5>

                <div className="flex items-center justify-between mt-2">
                  <span>YDS</span>
                  <span>
                    1389 <small>16TH</small>
                  </span>
                </div>
                <Progress
                  percent={80}
                  size={[330, 26]}
                  strokeLinecap="butt"
                  showInfo={false}
                  className="success"
                />

                <div className="flex items-center justify-between mt-2">
                  <span>TD</span>
                  <span>
                    6 <small>TIED - 21ST</small>
                  </span>
                </div>
                <Progress
                  percent={20}
                  size={[330, 26]}
                  strokeLinecap="butt"
                  showInfo={false}
                  className="error"
                />

                <div className="flex items-center justify-between mt-2">
                  <span>INT</span>
                  <span>
                    8 <small>TIED - 69ST</small>
                  </span>
                </div>
                <Progress
                  percent={25}
                  size={[330, 26]}
                  strokeLinecap="butt"
                  showInfo={false}
                  className="warning"
                />

                <div className="flex items-center justify-between mt-2">
                  <span>QBR</span>
                  <span>
                    61.0 <small>11TH</small>
                  </span>
                </div>
                <Progress
                  percent={65}
                  size={[330, 26]}
                  strokeLinecap="butt"
                  showInfo={false}
                  className="success"
                />
              </div>
              <div className="card">
                <div className="grid grid-cols-2 gap-2 pages-link">
                  <div>
                    <i className="icon-link-circle mr-1"></i> ESPN Page
                  </div>
                  <div>
                    <i className="icon-link-circle mr-1"></i> PFF Page
                  </div>
                  <div>
                    <i className="icon-link-circle mr-1"></i> HS Highlight Tape
                  </div>
                  <div>
                    <i className="icon-link-circle mr-1"></i> Roster Page
                  </div>
                  <div className="col-span-2">
                    <i className="icon-link-circle mr-1"></i> College Highlight
                    Tape
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-8 card-withou-pading ">
            <PlayerInformation />
          </div>
          <div className="col-span-4 card">
            <div className="flex items-center xfeed mb-10">
              <Image
                src="/tw.svg"
                alt="tw"
                width={47}
                height={47}
                className="mr-1"
              />
              XFeed
            </div>
            <Skeleton />
            <br />
            <br />
            <Skeleton />
            <br />
            <br />
            <Skeleton />
            <br />
            <br />
            <Skeleton />
            <br />
            <br />
            <Skeleton />
          </div>

          <div className="col-span-12 card">
            <PlayerList />
          </div>
        </div>
      </div>
    </Flex>
  );
}
