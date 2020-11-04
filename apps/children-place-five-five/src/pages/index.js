import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Grid from "@material-ui/core/Grid"
import Card from "../components/card"
import Paper from "@material-ui/core/Paper"

const Items = [
  {
    title: "I Am Accountable",
    description:
      "I am fully responsible for my own actions and consequences. I do not focus on what’s happening to me, and instead focus on what I can do within any given challenge to succeed for the customer, the team, and myself. I am committed to getting results. I am tenacious and bounce back from setbacks quickly. I take ownership in my contributions.",
  },
  {
    title: "I Care",
    description:
      "I have an authentic desire to have a positive effect on my colleagues. I form bonds and work to establish trust with my team members. I am considerate of others’ priorities and workloads. I communicate with respect and empathy. I cultivate a collaborative environment and make time to offer guidance and support.",
  },
  {
    title: "I Am Agile",
    description:
      "I am change-ready and quickly adapt to evolving circumstances. I promote open communication, connectedness, and transparency with my colleagues. I make things happen. I am confident in my capabilities and navigate ambiguity effectively.",
  },
  {
    title: "I Listen",
    description:
      "I am an active listener and fully engaged in conversations. I am attentive to the needs of the customers and my team members. I keep an open mind and don’t rush to judge the statements that are being said.",
  },
  {
    title: "I Am Proud",
    description:
      "I am a positive force. What I do everyday at work matters. I am crucial to making things happen. I create value in everything that has my involvement. I am the best that I can be.",
  },
  {
    title: "We Are Honest",
    description:
      "Our customers trust us. We are responsible for meeting their expectations, everyday. We drive innovation and value forward by challenging one another to promote personal awareness, sensitivity to others, and accountability.",
  },
  {
    title: "We Are Passionate",
    description:
      "I am fully responsible for my own actions and consequences. I do not focus on what’s happening to me, and instead focus on what I can do within any given challenge to succeed for the customer, the team, and myself. I am committed to getting results. I am tenacious and bounce back from setbacks quickly. I take ownership in my contributions.",
  },
  {
    title: "We Are Fast",
    description:
      "Our customers’ needs shift rapidly and we evolve to meet their expectations to accommodate fast-changing priorities. We mobilize quickly, we are adaptive, and we are empowered to act. We improve by taking risks and learning from our mistakes. We champion change and challenge each other to be proactive and move beyond our comfort zones.",
  },
  {
    title: "We Understand",
    description:
      "Our customer’s needs come first. We spend more time listening and respond with insight and awareness. We are not insulated in our own operations and are aware of what’s going on both internally and externally. We cross organizational and cultural boundaries to create shared direction, alignment, and commitment, as a unified global team.",
  },
  {
    title: "We Are Winners",
    description:
      "We win for our customers through our people and our innovation. We are agile thinkers, decision-makers, and problem solvers. We take charge from the front, the middle, or the back of the team. We create value and a sustainable competitive advantage for the business.",
  },
]

const IndexPage = props => {
  return (
    <Layout {...props}>
      <SEO title="Home" />
      <Paper
        elevation={1}
        spacing={3}
        style={{ margin: "auto", padding: "2%" }}
      >
        <Grid container direction="column" justify="center" alignItems="center">
          <Grid container spacing={3} alignContent="center" justify="center">
            {Items.slice(0, 5).map(({ title, description }) => (
              <Grid item lg={2}>
                <Link
                  to={`/editor/`}
                  style={{ textDecoration: "none" }}
                  state={{ selected: { title, description } }}
                >
                  <Card title={title} description={description} />
                </Link>
              </Grid>
            ))}
          </Grid>
          <br></br>
          <Grid container spacing={3} alignContent="center" justify="center">
            {Items.slice(5).map(({ title, description }) => (
              <Grid item lg={2}>
                <Link
                  to={`/editor/`}
                  style={{ textDecoration: "none" }}
                  state={{ selected: { title, description } }}
                >
                  <Card title={title} description={description} />
                </Link>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Paper>
    </Layout>
  )
}

export default IndexPage
