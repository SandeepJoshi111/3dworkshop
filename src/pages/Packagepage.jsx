import React from "react";
import Title from "../components/Title";
import { Icon } from "@iconify/react";
import packages from "../datas/package";
import Button from "../components/Button";

const Packagepage = () => {
  return (
    <div>
      <Title title={"PACKAGES"} subtitle={"Choose Your Perfect Fit!"} />
      <div className="flex flex-col gap-3 md:flex-row w-full">
        <div className="grid flex-grow place-items-center join">
          <div className="card bg-base-300 rounded-box  h-20 w-full flex justify-center items-center text-[2rem] font-bold rounded-t-2xl text-primaryBtn">
            ESSENTIAL
          </div>
          <div className="border-[1px] border-base-300  w-full p-10 rounded-b-2xl">
            {packages.map((pack, index) =>
              pack.essential.map((ess, idx) => (
                <div key={`package-${index}-essential-${idx}`}>
                  {ess.available.map((item, i) => (
                    <div
                      className="flex items-center gap-3 text-[1.2rem]"
                      key={i}
                    >
                      <Icon icon="mdi:tick" />
                      {item}
                    </div>
                  ))}
                  {ess.notavailable.map((item, i) => (
                    <div
                      className="flex items-center gap-3 text-[1.2rem] text-primaryBtn"
                      key={i}
                    >
                      <Icon icon="gridicons:cross" />
                      {item}
                    </div>
                  ))}
                </div>
              ))
            )}
            <div className="flex justify-center mt-10">
              <Button
                title="Rs. 4000"
                classname="bg-white text-black  hover:bg-primaryBtn text-xl"
              />
            </div>
          </div>
        </div>

        <div className="divider divider-horizontal"></div>
        <div className="grid flex-grow place-items-center join">
          <div className="card bg-base-300 rounded-box  h-20 w-full flex justify-center items-center text-[2rem] font-bold rounded-t-2xl text-primaryBtn">
            STANDARD
          </div>
          <div className="border-[1px] border-base-300   w-full p-10 border-t-0 rounded-b-2xl">
            {packages.map((pack, index) =>
              pack.standard.map((stand, idx) => (
                <div key={`package-${index}-standard-${idx}`}>
                  {stand.available.map((item, i) => (
                    <div
                      className="flex items-center gap-3 text-[1.2rem]"
                      key={i}
                    >
                      <Icon icon="mdi:tick" />
                      {item}
                    </div>
                  ))}
                  {stand.notavailable.map((item, i) => (
                    <div
                      className="flex items-center gap-3 text-[1.2rem] text-primaryBtn"
                      key={i}
                    >
                      <Icon icon="gridicons:cross" />
                      {item}
                    </div>
                  ))}
                </div>
              ))
            )}
            <div className="flex justify-center mt-10">
              <Button
                title="Rs. 12,000"
                classname="bg-white text-black  hover:bg-primaryBtn text-xl"
              />
            </div>
          </div>
        </div>
        <div className="divider divider-horizontal"></div>
        <div className="grid flex-grow place-items-center join">
          <div className="card bg-base-300 rounded-box  h-20 w-full flex justify-center items-center text-[2rem] font-bold rounded-t-2xl text-primaryBtn">
            PREMIUM
          </div>
          <div className="border-[1px] border-base-300   w-full p-10 border-t-0 rounded-b-2xl">
            {packages.map((pack, index) =>
              pack.premium.map((pre, idx) => (
                <div key={`package-${index}-premium-${idx}`}>
                  {pre.available.map((item, i) => (
                    <div
                      className="flex items-center gap-3 text-[1.2rem]"
                      key={i}
                    >
                      <Icon icon="mdi:tick" />
                      {item}
                    </div>
                  ))}
                  {pre.notavailable.map((item, i) => (
                    <div
                      className="flex items-center gap-3 text-[1.2rem] text-primaryBtn"
                      key={i}
                    >
                      <Icon icon="gridicons:cross" />
                      {item}
                    </div>
                  ))}
                </div>
              ))
            )}
            <div className="flex justify-center mt-10">
              <Button
                title="Rs. 20,000"
                classname="bg-white text-black  hover:bg-primaryBtn text-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packagepage;
