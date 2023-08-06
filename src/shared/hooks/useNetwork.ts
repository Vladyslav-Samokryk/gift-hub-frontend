import { useState, useEffect } from "react";

interface NetworkConnectionInfoType {
  rtt?: undefined;
  type?: undefined;
  saveData?: undefined;
  downLink?: undefined;
  downLinkMax?: undefined;
  effectiveType?: undefined;
}

function getNetworkConnection (): NetworkConnection {
  return (navigator.connection || navigator.mozConnection || navigator.webkitConnection || null);
}

function getNetworkConnectionInfo (): NetworkConnectionInfoType {
  const connection = getNetworkConnection();

  if (!connection) {
    return {};
  } return {
    rtt: connection.rtt,
    type: connection.type,
    saveData: connection.saveData,
    downLink: connection.downLink,
    downLinkMax: connection.downLinkMax,
    effectiveType: connection.effectiveType,
  };
}

export const useNetwork = (): NetworkConnectionInfoType & { online: boolean; since?: string; } => {
  const [state, setState] = useState<NetworkConnectionInfoType & { online: boolean; since?: string; }>(() => {
    return {
      since: undefined,
      online: navigator.onLine,
      ...getNetworkConnectionInfo(),
    };
  });

  useEffect(() => {
    const handleOnline = (): void => {
      setState((prevState) => ({
        ...prevState,
        online: true,
        since: new Date().toString(),
      }));
    };

    const handleOffline = (): void => {
      setState((prevState) => ({
        ...prevState,
        online: false,
        since: new Date().toString(),
      }));
    };

    const handleConnectionChange = (): void => {
      setState((prevState) => ({
        ...prevState,
        ...getNetworkConnectionInfo(),
      }));
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    const connection = getNetworkConnection();
    connection?.addEventListener("change", handleConnectionChange);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
      connection?.removeEventListener("change", handleConnectionChange);
    };
  }, []);

  return state;
};
