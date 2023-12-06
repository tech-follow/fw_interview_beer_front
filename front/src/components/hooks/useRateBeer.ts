import { useState, useCallback } from "react";

export function useRateBeer() {
  const [selectedScore, setSelectedScore] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const rateBeer = useCallback(async (uuid, newScore) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `http://localhost:3000/api/beers/${uuid}/rate`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ score: newScore }),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      setSelectedScore(newScore);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { rateBeer, selectedScore, isLoading, error };
}
