import { ReactNode } from "react";

import {
  Text,
  Flex,
  Spacer,
} from "@chakra-ui/react";

import Link from "next/link";

import styles from "@/styles/Join.module.scss";
import Footer from "@/components/Footer";

interface Props {
  children: ReactNode;
}

function Red(props: Props) {
  return <span style={{ color: "#FF002A" }}>{props.children}</span>;
}

function RedUnderline(props: Props) {
  return <u style={{ textDecorationColor: "#FF002A" }}><Red>{props.children}</Red></u>;
}

function Header() {
  return (
    <header className={styles.header}>
      <Text as="b" fontSize="4xl">
        join <Link href="/"><u style={{ textDecorationColor: "#FF002A" }}>cyber<Red>5</Red></u></Link>
      </Text>
      <Spacer />
      <Text>Fill out this short application to join cyber<Red>5</Red>.</Text>
      <Spacer />
    </header>
  );
}

export default function Join() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <Header />
        <form action="/api/register" method="post" className={styles.form}>
          <div>
            <label htmlFor="name">Your name</label>
            <input id="name" className={styles.nameInput} name="name" placeholder="John Doe" required />
          </div>

          <div>
            <label htmlFor="matrix">Matrix User ID</label>
            <input id="matrix" className={styles.matrixInput} name="matrix" placeholder="@hi:example.org" required />
            <Text fontSize="xs">A matrix account is required to join. However, you can leave this blank if you plan to make your account later. <Link href="/matrix"><RedUnderline>How to create an account?</RedUnderline></Link></Text>
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input id="email" className={styles.emailInput} name="email" type="email" placeholder="hi@example.org" required />
            <Text fontSize="xs">Don't worry, we won't spam you. We only require email so we can send club announcements to you in case you aren't active on the Matrix.</Text>
          </div>

          <fieldset className={styles.multi}>
            <legend>Grade level</legend>

            { /* These are display: hidden; */ }
            <div>
              <input id="g0" name="grade" value="9"  type="radio" />
              <input id="g1" name="grade" value="10" type="radio" />
              <input id="g2" name="grade" value="11" type="radio" />
              <input id="g3" name="grade" value="12" type="radio" />
              <input id="g4" name="grade" value="0"  type="radio" />

              <label htmlFor="g0">9</label>
              <label htmlFor="g1">10</label>
              <label htmlFor="g2">11</label>
              <label htmlFor="g3">12</label>
              <label htmlFor="g4">*</label>
            </div>

            <Text fontSize="xs">* Prefer not to answer</Text>
          </fieldset>

          <fieldset className={styles.multi2}>
            <legend>What interests you?</legend>

            { /* These are display: hidden; */ }
            <div>
              <input id="i0" name="interest_ctf" type="checkbox" />
              <input id="i1" name="interest_lab" type="checkbox" />
              <input id="i2" name="interest_pentest" type="checkbox" />
              <input id="i3" name="interest_competition" type="checkbox" />

              <label htmlFor="i0">CTFs</label>
              <Text fontSize="xs">A fun event where you compete with other teams to extract the most flags from </Text>

              <label htmlFor="i1">Cybersecurity Labs</label>
              <Text fontSize="xs">Learn about cybersecurity vulnerabilities in a hands-on experience</Text>

              <label htmlFor="i2">Penetration Testing</label>
              <Text fontSize="xs">Use your cybersecurity skills to find a vulnerability and break into a machine (for legal reasons, on a machine we own).</Text>

              <label htmlFor="i3">Cybersecurity Competitions</label>
              <Text fontSize="xs">Participate in national competitions over cybersecurity</Text>
            </div>
          </fieldset>

          <button className={styles.submit} type="submit">Submit</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}
