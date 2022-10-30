import { Refresh, VolumeOff, VolumeOn } from "../../svgs";
import {
    ButtonRefresh,
    ButtonVolume,
    Progressbar,
    ProgressbarDone, ProgressbarDoneMobile,
    ProgressbarMobile,
    WrapperControl
} from "./style";

function Progressbar1({ done ,mobile}) {
    return (
        mobile
            ? <ProgressbarMobile>
                <ProgressbarDoneMobile
                    style={{ width: `${done.playedSeconds / done.loadedSeconds * 100}%` }}
                ></ProgressbarDoneMobile>
            </ProgressbarMobile>
            : <Progressbar>
                <ProgressbarDone
                    style={{ width: `${done.playedSeconds / done.loadedSeconds * 100}%` }}
                ></ProgressbarDone>
            </Progressbar>
    );
}

const PlayerControl = ({ setVolume,volume,progress, reload }) => {
    return (
    <WrapperControl>
        {window?.innerWidth > 900 ?
            <>
            <ButtonRefresh onClick={(e)=> {e.stopPropagation(); reload();}}>
                <Refresh/>
            </ButtonRefresh>
            <ButtonVolume onClick={(e)=> {e.stopPropagation(); setVolume(!volume)}}>
                {volume ? <VolumeOff/> : <VolumeOn/> }
            </ButtonVolume>
            <Progressbar1 done={progress}/>
            </>
            : <Progressbar1 mobile done={progress}/>
        }
    </WrapperControl>
  );
};

export default PlayerControl;

