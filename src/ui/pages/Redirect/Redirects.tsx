import React from "react";
import {Redirect} from "./Redirect";

// return a list of components to generate redirect pages for
export const REDIRECTS: {from: string, component: JSX.Element}[] = [
  {
    from: '/download/uyco',
    component: <Redirect anchorText="I'm using Wormhole for file sharing, click here to get the photos!" title="UYCO Summer Concert 2023" to='https://wormhole.app/JKEml#kM7qqI_GGZMjmenxJ0UuKA' />
  }
]