
import MultipleContainers from "@/app/dndkit/presets/Sortable/MultipleContainers";

export default function RecruitingBoard() {

    return(
        <div className="main-container">
            <MultipleContainers itemCount={6} />
        </div>
    );
}