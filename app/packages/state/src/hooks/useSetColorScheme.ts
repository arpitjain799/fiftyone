import * as foq from "@fiftyone/relay";
import { useMemo } from "react";
import { useErrorHandler } from "react-error-boundary";
import { useMutation } from "react-relay";
import { useRecoilState, useRecoilValue } from "recoil";
import { stateSubscription } from "../recoil";
import useSendEvent from "./useSendEvent";

const useSetColorScheme = () => {
  const send = useSendEvent(true);
  const subscription = useRecoilValue(stateSubscription);
  const [commit] = useMutation<foq.setColorSchemeMutation>(foq.setColorScheme);
  const onError = useErrorHandler();

  return (colorScheme: foq.ColorScheme, saveToApp: boolean = false) =>
    send((session) =>
      commit({
        onError,
        variables: {
          subscription,
          session,
          colorScheme: colorScheme,
          saveToApp: saveToApp,
        },
      })
    );
};

export default useSetColorScheme;
