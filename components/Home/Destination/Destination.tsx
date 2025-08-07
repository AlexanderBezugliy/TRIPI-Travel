import SectionHeading from "@/components/Helpers/SectionHeading";
import React from "react";
import Slider from "./Slider";

const Destination = () => {
    return (
        <div id="destination" className="pt-20 pb-20">
            {/* HEADING */}
            <SectionHeading heading="Exploring Popular Destination" />

            {/* SLIDER */}
            <div className="">
                <Slider />
            </div>
        </div>
    );
};

export default Destination;
