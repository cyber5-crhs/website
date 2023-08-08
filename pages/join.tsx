import { ReactNode } from 'react';

import { Text, Spacer } from '@chakra-ui/react';

import Link from 'next/link';

import styles from '@/styles/Join.module.scss';
import Footer from '@/components/Footer';
import { jbmono } from '@/lib/fonts';

interface Props {
  children: ReactNode;
}

function Red(props: Props) {
  return <span style={{ color: 'var(--color-accent)' }}>{props.children}</span>;
}

function RedUnderline(props: Props) {
  return (
    <u style={{ textDecorationColor: 'var(--color-accent)' }}>
      <Red>{props.children}</Red>
    </u>
  );
}

function Hint(props: Props) {
  return <span style={{ color: 'var(--color-hint)' }}>{props.children}</span>;
}

function Header() {
  return (
    <header className={styles.header}>
      <Text fontWeight='extrabold' fontSize='4xl' className={jbmono.className}>
        application
      </Text>
      <Spacer />
      <Text color='var(--color-text)'>Let us know little about yourself!</Text>
      <Spacer />
    </header>
  );
}

export default function Join() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <Header />
        <form action='/api/register' method='post' className={styles.form}>
          <div>
            <label htmlFor='name'>
              Your name <Hint>(required)</Hint>
              <input
                id='name'
                className={styles.nameInput}
                name='name'
                placeholder='Kevin Mitnick'
                required
              />
            </label>
          </div>

          <div>
            <label htmlFor='matrix'>
              Matrix User ID <Hint>(optional)</Hint>
              <input
                id='matrix'
                className={styles.matrixInput}
                name='matrix'
                placeholder='@me:example.org'
                required
              />
            </label>
            <Text fontSize='xs' color='var(--color-text)'>
              A Matrix account is required to join. You can leave this field
              blank if you plan on making your account later.{' '}
              <a href='/matrix' target='_blank' rel="noopener noreferrer">
                <RedUnderline>How do I create an account?</RedUnderline>
              </a>
            </Text>
          </div>

          <div>
            <label htmlFor='email'>
              Email <Hint>(required)</Hint>
              <input
                id='email'
                className={styles.emailInput}
                name='email'
                type='email'
                placeholder='me@example.org'
                required
              />
            </label>
            <Text fontSize='xs' color='var(--color-text)'>
              Don&#39;t worry, we won&#39;t spam you. We only require email so
              we can send club announcements to you in case you aren&#39;t
              active on the Matrix.
            </Text>
          </div>

          <hr />

          <fieldset className={styles.multi}>
            <legend>
              Grade level <Hint>(required)</Hint>
            </legend>

            {/* These are display: hidden; */}
            <div>
              <input id='g0' name='grade' value='9' type='radio' />
              <label htmlFor='g0'>9</label>

              <input id='g1' name='grade' value='10' type='radio' />
              <label htmlFor='g1'>10</label>

              <input id='g2' name='grade' value='11' type='radio' />
              <label htmlFor='g2'>11</label>

              <input id='g3' name='grade' value='12' type='radio' />
              <label htmlFor='g3'>12</label>

              <input id='g4' name='grade' value='0' type='radio' />
              <label htmlFor='g4'>*</label>
            </div>

            <Text fontSize='xs' color='var(--color-text)'>
              * Prefer not to answer
            </Text>
          </fieldset>

          <hr />

          <fieldset className={styles.multi2}>
            <legend>What interests you?</legend>

            {/* These are display: hidden; */}
            <div>
              <input id='i0' name='interest_ctf' type='checkbox' />
              <label htmlFor='i0'>CTFs</label>
              <Text fontSize='xs' color='var(--color-text)'>
                An event where you compete with other teams win as many flags by
                solving challenges.
              </Text>

              <input id='i1' name='interest_lab' type='checkbox' />
              <label htmlFor='i1'>Cybersecurity Labs</label>
              <Text fontSize='xs' color='var(--color-text)'>
                Learn about cybersecurity vulnerabilities in a hands-on
                experience.
              </Text>

              <input id='i2' name='interest_pentest' type='checkbox' />
              <label htmlFor='i2'>Penetration Testing</label>
              <Text fontSize='xs' color='var(--color-text)'>
                Use your cybersecurity skills to find a vulnerability and break
                into a machine or application (for legal reasons, on a machine
                we own).
              </Text>

              <input id='i3' name='interest_competition' type='checkbox' />
              <label htmlFor='i3'>Cybersecurity Competitions</label>
              <Text fontSize='xs' color='var(--color-text)'>
                Participate in local or national cybersecurity competitions.
              </Text>
            </div>
          </fieldset>

          <button className={styles.submit} type='submit'>
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}
