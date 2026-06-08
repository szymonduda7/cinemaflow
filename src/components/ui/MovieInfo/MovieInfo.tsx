import styles from "./MovieInfo.module.scss";
import { Text } from "../Text";
import { Flex } from "../../common";

interface MovieInfoProps {
  content: Array<string>;
  className?: string;
}

export function MovieInfo({ content, className }: MovieInfoProps) {
  return (
    <Flex className={className} alignItems="center" gap={"16px"}>
      {content.map((e, i) => (
        <>
          <Text variant="body-lg">{e}</Text>
          {content.length - 1 !== i && (
            <div className={styles["circle-divider"]} />
          )}
        </>
      ))}
    </Flex>
  );
}
