// import React, { Component } from "react";
// import { Accordion, Form, Menu } from "semantic-ui-react";


// const ColorForm = (
//   <Form>
//     <Form.Group grouped>
//       <Form.Checkbox label='Red' name='color' value='red' />
//       <Form.Checkbox label='White' name='color' value='white' />
//       <Form.Checkbox label='Rosé' name='color' value='rose' />
//       <Form.Checkbox label='Sparkling' name='color' value='sparkling' />
//     </Form.Group>
//   </Form>
// )
// const CountryForm = (
//   <Form>
//     <Form.Group grouped>
//       <Form.Checkbox label='Germany' name='color' value='germany' />
//       <Form.Checkbox label='France' name='color' value='france' />
//       <Form.Checkbox label='Greece' name='color' value='Greece' />
//       <Form.Checkbox label='Portugal' name='color' value='portugal' />
//     </Form.Group>
//   </Form>
// )


// class AllWinesFilter extends Component {
//     render() {
//         return (
//         <Accordion as={Menu} vertical>
//         <Menu.Item>
//           <Accordion.Title
//             active={activeIndex === 0}
//             content='Countries'
//             index={0}
//             onClick={this.handleClick}
//           />
//           <Accordion.Content active={activeIndex === 0} content={CountryForm} />
//         </Menu.Item>

//         <Menu.Item>
//           <Accordion.Title
//             active={activeIndex === 1}
//             content='Colors'
//             index={1}
//             onClick={this.handleClick}
//           />
//           <Accordion.Content active={activeIndex === 1} content={ColorForm} />
//         </Menu.Item>
//       </Accordion> 
//         );
//     }
// }

// export default AllWinesFilter;