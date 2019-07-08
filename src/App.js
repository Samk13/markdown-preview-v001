import React from 'react'
import marked from 'marked'
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './components/NavBar'
import Information from './components/Information'
import { Button, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';
import Header from './components/Header'


const initialMarkdown = `
### Headers
[see Wikipedia](https://en.wikipedia.org/wiki/Markdown)
# Header 1
## Header 2
### Header 3
#### Header 4
##### Header 5
###### Header 6

### List 
- list item one
- list item two
- list item three
### links
[My Github](https://github.com/Samk13)
[My LinkedIn](https://www.linkedin.com/in/samarbid/)

### Text Decorations
*italic* and **bold**
### Images 
![](https://apprecs.org/ios/images/app-icons/256/96/343544214.jpg)

### Blockquote
> life will give you what ever you think of .
### code 
\` npm install create-react-app -g \`
### Coding
\`\`\`
const x = 10 ;
const y = 15;
let func(x,y) => (x+y);
console.log (func);
\`\`\`
`

let renderer = new marked.Renderer()
renderer.link = function (href, title, text) {
  return `<a href=${href} target= '_blank'>${text}</a>`
}
marked.setOptions({
  renderer: renderer,
  breaks: true,
})

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      markdown: initialMarkdown
    }
  }
  handelChange = e => this.setState({ markdown: e.target.value })


  render() {
    return (

      <div>
        <NavBar />
        <Header />
        <Information />

        <Button color="primary" size="lg" block onClick={() => this.setState({ markdown: '' })}>ClearText</Button>
        <br />

        <Container>
          <Row>


            <Col>
              <FormGroup>
                <Label for="exampleText">Write your text here  <span role="img" aria-label="write your text here">✍</span></Label>
                <Input className='left' style={{ height: 900 }} type="textarea" id='editor' name="text" value={this.state.markdown} onChange={this.handelChange} />
              </FormGroup>
            </Col>


            <Col>
              <p>MarkdownResult <span role="img" aria-label="look down">👇</span></p>
              <div className='right'>
                <div id='preview'
                  dangerouslySetInnerHTML={{ __html: marked(this.state.markdown) }} />
              </div>
            </Col>
          </Row>

        </Container>

      </div>

    )
  }
}

export default App;
