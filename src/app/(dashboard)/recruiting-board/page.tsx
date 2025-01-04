
import MultipleContainers from "@/app/dndkit/presets/Sortable/MultipleContainers";
import { data } from '@/apis/data';

export default function RecruitingBoard() {

    return(
        <div className="main-container">
            <MultipleContainers items={data} />
        </div>
    );
}