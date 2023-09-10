import {useState} from 'react';

export default function (refetch: () => Promise<unknown>) {
  const [isRefreshing, isRefreshingSet] = useState(false);

  async function onRefresh() {
    isRefreshingSet(true);

    try {
      await refetch();
    } finally {
      isRefreshingSet(false);
    }
  }

  return {
    isRefreshing,
    onRefresh,
  };
}
