import React from "react"
import Layout from "../components/Layout"
import background from '../../static/HomePageNew.png';
import Segmenter from '../js/main.js'; // NEEDED FOR IMPORT
//import ReactFullpage from "@fullpage/react-fullpage";
import '../styles/components/index-about.scss'
import useHomeContent from '../static_queries/useHomeContent'
import { Grid,Segment, Container, Image } from 'semantic-ui-react'
//import image_real_2 from "images/John.jpeg"
import IframeResizer from 'iframe-resizer-react'


const ReactFullpage = React.lazy(() => import('@fullpage/react-fullpage'))
const image_real_2 = React.lazy( () => import("../../content/images/John.jpeg"))

const PageLoaded = () => {
  const { HomeContent } = useHomeContent();
  const { grid_items, vimeo_feature,
    client_info,
    client_image
  } = HomeContent
  React.useEffect(() => {
    setTimeout(() => {
      const width = 40;
      const height = 40;
      let options = {
        pieces: 4,
        animation: {
          duration: 1500,
          easing: 'easeInOutExpo',
          delay: 100,
          translateZ: 100,
        },
        parallax: true,
        positions: [
          {
            top: 0, left: 0, width, height,
          },
          {
            top: 55, left: 0, width, height,
          },
          {
            top: 0, left: 55, width, height,
          },
          {
            top: 55, left: 55, width, height,
          },
        ],
      };
      const showOptions = !!Math.round(Math.random());
      if (!showOptions) options = {};
      if (!window.Segmenter) return;
      const segmenter = new window.Segmenter(
        document.querySelector('.segmenter'),
        {
          ...options,
          onReady() {
            segmenter.animate();
          },
        },
      );
    }, 500);
  });

  return (
    <ReactFullpage
      scrollOverflow={true}
      render={({ state, fullpageApi }) => (
        <Segment.Group id="fullpage-wrapper">
          <div className="section section1">
            <Layout page="home" bgColor="inherit" >
            <Segment raised>
                <div
                  className="segmenter"
                  style={{
                    backgroundImage: `url(${background})`,
                    height: "100vh",
                    width: "100%"
                  }}
                />
              </Segment>
            </Layout>
          </div>
          <div className="section section3">
            <Segment raised>
            <div style={{ background: "white", height: '60%' }} >
              <div style={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyCcontent: "center"
              }}>
                <div style={{ margin: "auto" }}
                  dangerouslySetInnerHTML={{
                    __html: vimeo_feature
                  }}
                />
                <div style={{
                  marginTop: "-2em",
                  padding: "1.5em",
                  border: "5px solid #1c2123",
                  background: "#7bd4ff"

                }}>
                  <p>
                    Featured Video
                  </p>
                </div>
              </div>
            </div>
            </Segment>
          </div>
          <div className="section section2">
            <Container>
            <h1 style={{ textAlign: "center" }}> Meet The Team</h1>
            <section class="grid">
              {/*https://tympanus.net/codrops/2017/02/27/geeky-glasses-first-person-try-experiment/*/}
              {grid_items.map(({ title, description, image }, i) => (
                <div class="grid__item" style={{ marginTop: i === 0 ? "" : "10%" }}>
                  <a class="grid__link">
                    <img class="grid__img" src={image} alt="Glasses 1" />
                    <h3 class="grid__item-name">{title}</h3>
                    <p class="grid__item-desc">{description}</p>
                  </a>
                </div>
              ))}
            </section>
            </Container>
          </div>
          <div className="section section3">
          <Segment raised>
            <div style={{ background: "white", height: '60%' }} >
              <h1 style={{ textAlign: "center" }}>Clients </h1>
              <Grid columns="equal" divided centered stackable>
                  <Grid.Column>
                  <Segment raised>
                    <Image
                    centered
                      class="grid__img" src={client_image} alt="Glasses 1" />
                  </Segment>
                  </Grid.Column>
                  <Grid.Column >
                    <p style={{
                      padding: "1.5em",
                      border: "5px solid #1c2123",
                      background: "#7bd4ff"

                    }}>
                      {client_info}
                    </p>
                  </Grid.Column>
             </Grid>
            </div>
          </Segment>
          </div>
          </Segment.Group>
      )}
    />

  )
}

export default () => (
    <>
      {typeof window !== 'undefined' && (
        <React.Suspense fallback={<div />}>
          <PageLoaded />
        </React.Suspense>
      )}
    </>
  )