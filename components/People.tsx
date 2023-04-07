import styles from "@/styles/People.module.scss";
import { Box, Flex, Text } from "@chakra-ui/react";
import { v4 as uuidv4 } from 'uuid';

export default function People() {
  let team = [
    "Joey    - Co-President",
    "Alex    - Co-President",
    "Grace   - Marketing Officer",
  ];
  let members = [
    "Amanda",
    "Bernardo",
    "Billy",
    "Taniel",
    "Max",
    "Lakshay",
    "Kerwin",
    "Rohan",
    "Jacob"
  ].sort();

  return (
    <Flex className={styles.main}>
      <Text className={styles.sectionText}>Our team:</Text>
      {team.map((m) => (
        <Text className={styles.name} key={uuidv4()}>{m}</Text>
      ))}
      <Box height="16px"></Box>
      <Text className={styles.sectionText}>Our members:</Text>
      {members.map((m) => (
        <Text key={uuidv4()}>{m}</Text>
      ))}
    </Flex>
  );
}
