import {IExperiment} from "./types/experiment";
import {DialSplashPage} from "./ui/pages/Experiments/Experiments/DialSplashPage";

export const experiments: IExperiment[] = [
  {
    name: "Dial Splash Page",
    keyed_name: "dial-splash-page",
    date: '2023-08-05',
    local_image_url: "assets/images/dial-splash-page.png",
    component: DialSplashPage
  }
]