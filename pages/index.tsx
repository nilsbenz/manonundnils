import { Box, Container, Image, Text, TextInput, Title } from '@mantine/core';
import { getDownloadURL, listAll, ref } from 'firebase/storage';
import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { storage } from '../lib/firebase';

const Index: NextPage = () => {
  const [images, setImages] = useState<string[]>([]);
  const [currentImage, setCurrentImage] = useState<string>();

  useEffect(() => {
    const fetchImages = async () => {
      const hero = ref(storage, 'hero');
      const res = (await listAll(hero)).items.map((x) => x.fullPath);
      setImages(res);
    };

    fetchImages();
  }, []);

  useEffect(() => {
    if (images.length) {
      const getRandomImage = async () => {
        const reference = ref(storage, `${images[Math.floor(Math.random() * images.length)]}`);
        setCurrentImage(await getDownloadURL(reference));
      };

      getRandomImage();
    }
  }, [images]);

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateRows: 'auto auto 1fr',
        gap: 32,
      }}
    >
      <Title
        sx={{
          fontSize: 100,
          fontWeight: 900,
          letterSpacing: -2,
          marginTop: 16,
          marginBottom: -16,
        }}
        align="center"
      >
        <Text inherit variant="gradient" component="span">
          Manon
        </Text>
        {' und '}
        <Text inherit variant="gradient" component="span">
          Nils
        </Text>
      </Title>
      <Container size="xs" sx={{ width: '100%' }}>
        <form method="get" action="https://www.google.com/search">
          <TextInput name="q" size="lg" radius="md" autoFocus />
        </form>
      </Container>
      <Container size="md">
        <Image src={currentImage} alt="" radius="md" withPlaceholder />
      </Container>
    </Box>
  );
};

export default Index;
