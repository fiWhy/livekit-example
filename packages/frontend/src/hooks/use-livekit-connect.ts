import axios from 'axios';
import { useCallback } from 'react';
import type { UserSettings } from '~/livekit';
import { useLivekit } from '~/livekit';

export const useLivekitConnect = (identity: string, name: string) => {
  const { connect } = useLivekit();
  return useCallback(() => {
    connect({
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      url: `ws://${import.meta.env.LC_EXT_IP}:7880`,
      token: () =>
        axios
          .post<
            string,
            {
              data: { token: string };
            },
            UserSettings
          >(`/backend/token`, {
            identity,
            name,
          })
          .then((data) => data.data.token),
    });
  }, [connect, identity, name]);
};
