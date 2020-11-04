import React, { useRef, useCallback } from "react"
import Layout from "../components/Layout"
//this component handles the blur img & fade-ins
import Img from 'gatsby-image'
import Drone from '../../static/mapstone.png'
import { graphql } from 'gatsby'
import {
	Container,
	Header,
	Button,
	List,
	Label,
	Reveal,
	Loader,
	Dimmer,
	Segment,
	Grid, Responsive
} from 'semantic-ui-react'
import MaterialGrid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Drawer from '@material-ui/core/Drawer';
import Tooltip from '@material-ui/core/Tooltip';
import '../css/css/oldstonehouse.css'
import useBlogData from '../static_queries/useBlogData'
import IframeResizer from 'iframe-resizer-react'
import { Icon } from "semantic-ui-react";
import MapGL, { NavigationControl, Marker } from "react-map-gl";
import Loadable from "@loadable/component"
import { isIOS, isMobile } from '../utils/isMobile'
//const ReactFullpage = React.lazy(() => import('@fullpage/react-fullpage'))
const ReactFullpage = Loadable(() => import("@fullpage/react-fullpage"))



const markerList = [
	{
		lat: 40.673199,
		long: -73.984222,
		name: "Old Stone House of Brooklyn",
		info: 10
	},
];

const DrawerContainer = ({ active, onClose }) => (
	<Container>
		<MaterialGrid container direction="column"  >
			<br />
			<Grid item>
				<MaterialGrid container direction="row">
					<MaterialGrid item>
						<Button
							color="black"
							icon='arrow left' content='Close'
							onClick={onClose}
						/>
					</MaterialGrid>
					<MaterialGrid item>
						<h1>{active.frontmatter.title}</h1>
					</MaterialGrid>
				</MaterialGrid>
			</Grid>
			<Grid item>
				<h3>{active.frontmatter.date}</h3>
			</Grid>
			<Grid item style={{ height: "50vh" }}>
				<IframeResizer
					src={active.frontmatter.vimeo_iframe_tag}
					style={{ width: '1px', minWidth: '100%' }}
					autoResize
					heightCalculationMethod="bodyScroll"
				/>
			</Grid>
			<Grid item>
				<div
					dangerouslySetInnerHTML={{ __html: active.html }}
				></div>
			</Grid>
		</MaterialGrid>
	</Container>
)


const TOKEN =
	"pk.eyJ1IjoiYWJoaWxhc2hhLXNpbmhhIiwiYSI6ImNqdzFwYWN1ajBtOXM0OG1wbHAwdWJlNmwifQ.91s73Dy03voy-wPZEeuV5Q";


export default function Blog(props) {
	const blogData = useBlogData()
	const oldstonehouse = blogData.filter(({ node: { fields: { slug } } }) => slug.includes("theoldstonehouse"))

	const [viewport, changeViewport] = React.useState({
		latitude: 40.673199,
		longitude: -73.984222,
		zoom: 15,
		bearing: 0,
		pitch: 0,
		width: "100%",
		height: 500
	})
	if (oldstonehouse.length < 4) return null;
	const [active, setActive] = React.useState({
		frontmatter: {
			title: "",
			date: ""
		},
	})
	const [open, setOpen] = React.useState(false)
	const itemClick = (active, i) => () => {
		//active.frontmatter.hero_image
		setActive({
			index: i,
			frontmatter: {
				title: active.frontmatter.title,
				date: active.frontmatter.date,
				vimeo_iframe_tag: active.frontmatter.vimeo_iframe_tag
			},
			html: active.html
		})
		setOpen(true)
	}
	const onClose = () => {
		setActive({
			frontmatter: {
				title: "",
				date: ""
			},
		})
		setOpen(false)
	}
	console.log(oldstonehouse)
	return (
		<>
			<Drawer anchor="right" open={open} >
				<DrawerContainer
					active={active}
					onClose={() => {
						setOpen(!open)
					}}

				/>
			</Drawer>
			<ReactFullpage
				scrollOverflow={true}
				render={(() => (
					<Segment.Group>
						<div className="section section1">
							<Segment>
								<Layout>

									<Grid
										centered
										className="js"
										celled='internally' stackable columns='equal'>
										<Responsive as={Grid.Column} minWidth={768}>
											<Segment raised>
												<Img
													className="static"
													fluid={
														props.data.file.childImageSharp.fluid
													}
												/>
												<svg className="points js" viewBox="0 0 1885 1080" width="100%" height="100%">
													<Tooltip
														title={(
															<>
																<Typography color="inherit">
																{oldstonehouse[0].node.frontmatter.title}
																</Typography>
																<div
																	onClick={itemClick(oldstonehouse[0].node)}
																	dangerouslySetInnerHTML={{ __html: oldstonehouse[0].node.html }}
																></div>
															</>
														)
														}>
														<path
															onClick={itemClick(oldstonehouse[0].node)}
															class="point"
															fill="white"
															 d="M642.0533944954682,256.98958777618407 L642.0533944954682,256.98958777618407 C627.4357544954681,242.37194777618402 603.7593044954681,242.37194777618402 589.1416644954681,256.98958777618407 L589.1416644954681,256.98958777618407 C575.9652044954681,270.1660477761841 574.5240244954681,294.8719177761841 585.6416644954681,309.9013177761841 L615.4945844954682,353.136577776184 L645.3475044954681,309.9013177761841 C656.6710344954681,294.8719177761841 655.2298544954681,270.1660477761841 642.0533944954682,256.98958777618407 z" id="svg_15" stroke-dasharray="none" opacity="0.5" stroke="null">
														 	<path class="point" d="M673.0165084081646,115.62374141076862 L673.0165084081646,115.62374141076862 C658.3988711076731,101.00610411027742 634.7224163251872,101.00610411027742 620.1047790246957,115.62374141076862 L620.1047790246957,115.62374141076862 C606.9283172327036,128.80020320276094 605.4871417242043,153.5060690627463 616.6047813611976,168.53547079423743 L646.4577026086799,211.7707360492118 L676.3106238561622,168.53547079423743 C687.6341457086555,153.5060690627463 686.1929702001567,128.80020320276094 673.0165084081646,115.62374141076862 z" id="svg_1" stroke-dasharray="none" opacity="0.5" stroke="null"></path></path>
													</Tooltip>
													<Tooltip
														title={(
															<>
																<Typography color="inherit">
																	{oldstonehouse[4].node.frontmatter.title}
																</Typography>
																<div
																	dangerouslySetInnerHTML={{ __html: oldstonehouse[4].node.html }}
																></div>
															</>
														)
														}>
														<path
															onClick={itemClick(oldstonehouse[4].node)}
															class="point" 
																fill="white"
															d="M1238.7854978594971,568.9047064651489 L1238.7854978594971,568.9047064651489 C1224.167857859497,554.2870664651489 1200.491407859497,554.2870664651489 1185.873767859497,568.9047064651489 L1185.873767859497,568.9047064651489 C1172.697307859497,582.081166465149 1171.2561278594972,606.787036465149 1182.373767859497,621.816436465149 L1212.226687859497,665.0516964651489 L1242.0796078594972,621.816436465149 C1253.403137859497,606.787036465149 1251.961957859497,582.081166465149 1238.7854978594971,568.9047064651489 z" id="svg_16" stroke-dasharray="none" opacity="0.5" stroke="null"></path>
													</Tooltip>
													<Tooltip
														title={(
															<>
																<Typography color="inherit">
																{oldstonehouse[1].node.frontmatter.title}
																</Typography>
																<div
																	onClick={itemClick(oldstonehouse[1].node)}
																	dangerouslySetInnerHTML={{ __html: oldstonehouse[1].node.html }}
																></div>
															</>
														)
														}>

														<path 
														onClick={itemClick(oldstonehouse[1].node)}
fill-opacity="1" 
															fill="white"
														class="point" d="M1295.8900360482787,298.9470202819824 L1295.8900360482787,298.9470202819824 C1281.2723960482788,284.32938028198237 1257.5959460482788,284.32938028198237 1242.978306048279,298.9470202819824 L1242.978306048279,298.9470202819824 C1229.8018460482788,312.12348028198244 1228.3606660482787,336.82935028198244 1239.478306048279,351.85875028198245 L1269.3312260482787,395.0940102819824 L1299.1841460482788,351.85875028198245 C1310.5076760482789,336.82935028198244 1309.0664960482789,312.12348028198244 1295.8900360482787,298.9470202819824 z" id="svg_17" stroke-dasharray="none" opacity="0.5" stroke="null"><path class="point" d="M1318.1123554128264,330.0582699672699 L1318.1123554128264,330.0582699672699 C1303.4947154128265,315.44062996726984 1279.8182654128266,315.44062996726984 1265.2006254128266,330.0582699672699 L1265.2006254128266,330.0582699672699 C1252.0241654128265,343.2347299672699 1250.5829854128265,367.9405999672699 1261.7006254128266,382.9699999672699 L1291.5535454128265,426.20525996726985 L1321.4064654128265,382.9699999672699 C1332.7299954128266,367.9405999672699 1331.2888154128266,343.2347299672699 1318.1123554128264,330.0582699672699 z" id="svg_17" stroke-dasharray="none" opacity="0.5" stroke="null"></path></path>
													</Tooltip>
													<Tooltip
														title={(
															<>
																<Typography color="inherit">
																	{oldstonehouse[3].node.frontmatter.title}
																</Typography>
																<div
																	onClick={itemClick(oldstonehouse[3].node)}
																	dangerouslySetInnerHTML={{ __html: oldstonehouse[3].node.html }}
																></div>
															</>
														)
														}>
														<path
															onClick={itemClick(oldstonehouse[3].node)}
															fill="white"
															class="point" d="M833.1653437008667,790.3252925796509 L833.1653437008667,790.3252925796509 C818.5477037008667,775.7076525796508 794.8712537008666,775.7076525796508 780.2536137008667,790.3252925796509 L780.2536137008667,790.3252925796509 C767.0771537008667,803.5017525796509 765.6359737008667,828.2076225796509 776.7536137008667,843.2370225796509 L806.6065337008667,886.4722825796508 L836.4594537008667,843.2370225796509 C847.7829837008667,828.2076225796509 846.3418037008666,803.5017525796509 833.1653437008667,790.3252925796509 z" id="svg_15" stroke-dasharray="none" opacity="0.5" stroke="null"></path>
													</Tooltip>
													<Tooltip
														title={(
															<>
																<Typography color="inherit">
																	{oldstonehouse[2].node.frontmatter.title}
																</Typography>
																<div
																	dangerouslySetInnerHTML={{ __html: oldstonehouse[2].node.html }}
																></div>
															</>
														)
														}>
														<path
															onClick={itemClick(oldstonehouse[2].node)}
															fill="white"
															class="point" d="M264.77514668423134,423.99523123825384 L264.77514668423134,423.99523123825384 C251.15986057239968,410.3799451264222 229.10693236309487,410.3799451264222 215.4916462512632,423.99523123825384 L215.4916462512632,423.99523123825384 C203.21871229130227,436.2681651982148 201.87636013943154,459.27991637314153 212.23164816814858,473.2787316712221 L240.03751417118508,513.5492962273439 L267.8433801742216,473.2787316712221 C278.390432796063,459.4716809662659 277.0480806441923,436.2681651982148 264.77514668423134,423.99523123825384 z" id="svg_6" stroke-dasharray="none"  stroke="null"></path>
													</Tooltip>
													<Tooltip
														title={(
															<>
																<Typography color="inherit">
																	{oldstonehouse[6].node.frontmatter.title}
																</Typography>
																<div
																	dangerouslySetInnerHTML={{ __html: oldstonehouse[6].node.html }}
																></div>
															</>
														)
														}>
														<path
															onClick={itemClick(oldstonehouse[6].node)}
															fill="white"
															class="point" d="M816.3251933757039,418.7370879429506 L816.3251933757039,418.7370879429506 C801.7977672126814,403.8256170858534 778.2674290613068,403.8256170858534 763.7400028982844,418.7370879429506 L763.7400028982844,418.7370879429506 C750.6448581879541,432.1784137859684 749.2125767352618,457.3808997416262 760.2616050846026,472.71241203131785 L789.9302923189443,516.8167624537191 L819.5989795532864,472.71241203131785 C830.8526195387263,457.59092045792306 829.420338086034,432.1784137859684 816.3251933757039,418.7370879429506 z" id="svg_12" fill="white" opacity="0.55" fill-opacity="1" stroke="none"></path>
													</Tooltip>
													<Tooltip
														title={(
															<>
																<Typography color="inherit">
																	{oldstonehouse[5].node.frontmatter.title}
																</Typography>
																<div
																	dangerouslySetInnerHTML={{ __html: oldstonehouse[5].node.html }}
																></div>
															</>
														)
														}>
														<path
															onClick={itemClick(oldstonehouse[5].node)}
															fill="white"
															class="point" d="M1005.3649880453854,322.4069018540191 L1005.3649880453854,322.4069018540191 C988.882979567516,305.9248933761504 962.1867686526579,305.9248933761504 945.7047601747888,322.4069018540191 L945.7047601747888,322.4069018540191 C930.847738448259,337.2639235805493 929.2227516969197,365.1208393177928 941.7583637786789,382.06712972461577 L975.4188036278482,430.8167322647919 L1009.0792434770178,382.06712972461577 C1021.8469965232543,365.3529802822695 1020.222009771915,337.2639235805493 1005.3649880453854,322.4069018540191 z" id="svg_13" fill="white" opacity="0.55" fill-opacity="1" stroke="none">
														</path>
													</Tooltip>
												</svg>
											</Segment>
										</Responsive>
										<Grid.Column computer={3} mobile={8} tablet={6}>
											<List style={{ overflow: 'auto', maxHeight: "70rem" }}>
												{oldstonehouse.map((blog, i) => (
													<List.Item onClick={itemClick(blog.node, i)} key={blog}>
														<Segment raised>
															<Img
																fluid={
																	blog.node.frontmatter.hero_image.childImageSharp.fluid
																}
																alt={blog.node.frontmatter.title}
															/>
														</Segment>
													</List.Item>
												))}
											</List>
										</Grid.Column>
									</Grid>
								</Layout>
							</Segment>
						</div>
						<div className="section ">
							<Segment raised >
								<Grid
									centered
									className="js"
									celled='internally' stackable columns='equal'>
									<Grid.Column
									>
										<Header as='h3' style={{ fontSize: '2em' }}>
											Old Stone House (Brooklyn)
            						</Header>
										<p style={{ fontSize: '1.33em' }}>
											The Old Stone House is a house located in the Park Slope neighborhood of Brooklyn, New York City. The Old Stone House is situated within the J. J. Byrne Playground, at Washington Park, on Third Street between Fourth and Fifth Avenues. Gowanus Creek once ran nearby, but today the southeastern branch of the Gowanus Canal ends 1,300 feet (400 m) west of the house
            						</p>
										<Header as='h3' style={{ fontSize: '2em' }}>
											Located in: Washington Park
            						</Header>
										<p style={{ fontSize: '1.33em' }}>
											Address: 336 3rd St, Brooklyn, NY 11215
            						</p>
									</Grid.Column>
									<Grid.Column>
										<Segment raised>
											<MapGL
												{...viewport}
												onViewportChange={viewport => changeViewport(viewport)}
												mapStyle="mapbox://styles/mapbox/streets-v10"
												mapboxApiAccessToken={TOKEN}
											>
												<div className="nav" >
													<NavigationControl
														onViewportChange={viewport => this.setState({ viewport })}
													/>
													{markerList.map((marker, index) => (
														<div key={index}>
															{" "}
															<Marker longitude={marker.long} latitude={marker.lat}>
																<Icon
																	name="hospital"
																	size="big"
																/>
															</Marker>{" "}
														</div>
													))}
												</div>
											</MapGL>
										</Segment>
									</Grid.Column>
								</Grid>
							</Segment>
						</div>
					</Segment.Group>
				))}
			/>
		</>
	)
}

export const query = graphql`
  query MyQuery {
    file(relativePath: { eq: "map.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
  `