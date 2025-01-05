"use client"

import { data } from "@/apis/data";
import MultipleContainers from "@/app/dndkit/presets/Sortable/MultipleContainers";

export default function RecruitingBoard() {
    return(
        <div className="main-container">
            <MultipleContainers data={data} handle={true} />
        </div>
    );
}