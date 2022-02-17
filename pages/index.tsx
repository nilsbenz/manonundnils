import { Container, Space, Text, TextInput, Title } from '@mantine/core';

export default function HomePage() {
  return (
    <>
      <Title sx={{ fontSize: 100, fontWeight: 900, letterSpacing: -2 }} align="center" mt={100}>
        Hey min{' '}
        <Text inherit variant="gradient" component="span">
          Schatz
        </Text>
      </Title>
      <Space h={40} />
      <Container size="xs">
        <form method="get" action="https://www.google.com/search">
          <TextInput name="q" size="lg" radius="md" />
        </form>
      </Container>
    </>
  );
}
