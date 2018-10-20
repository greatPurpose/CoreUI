import React from  'react';
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';

export class SwithForm extends React.Component{
    
    render(){
        let checked = this.props.checkVal;
        const Switch1 = (
        <Card  style={{ fontSize: 10 + 'px' }} >
            <CardHeader>
              <i className="fa fa-align-justify"></i> Simple Table
            </CardHeader>
            <CardBody>
              <Table responsive>
                <thead>
                <tr>
                  <th>Username</th>
                  <th>Date registered</th>
                  <th>Role</th>
                  <th>Status</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>Samppa Nori</td>
                  <td>2012/01/01</td>
                  <td>Member</td>
                  <td>
                    <Badge color="success">Active</Badge>
                  </td>
                </tr>
                <tr>
                  <td>Estavan Lykos</td>
                  <td>2012/02/01</td>
                  <td>Staff</td>
                  <td>
                    <Badge color="danger">Banned</Badge>
                  </td>
                </tr>
                <tr>
                  <td>Chetan Mohamed</td>
                  <td>2012/02/01</td>
                  <td>Admin</td>
                  <td>
                    <Badge color="secondary">Inactive</Badge>
                  </td>
                </tr>
                <tr>
                  <td>Derick Maximinus</td>
                  <td>2012/03/01</td>
                  <td>Member</td>
                  <td>
                    <Badge color="warning">Pending</Badge>
                  </td>
                </tr>
                <tr>
                  <td>Friderik Dávid</td>
                  <td>2012/01/21</td>
                  <td>Staff</td>
                  <td>
                    <Badge color="success">Active</Badge>
                  </td>
                </tr>
                </tbody>
              </Table>
              <Pagination>
                <PaginationItem>
                  <PaginationLink previous tag="button"></PaginationLink>
                </PaginationItem>
                <PaginationItem active>
                  <PaginationLink tag="button">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink tag="button">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink tag="button">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink tag="button">4</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink next tag="button"></PaginationLink>
                </PaginationItem>
              </Pagination>
            </CardBody>
          </Card>);

        const Switch2 = (
            <Card>
                <CardHeader>
                Card with label
                <Badge color="success" className="float-right">Success</Badge>
                </CardHeader>
                <CardBody>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                </CardBody>
          </Card>
        );
        if (checked)
        {
           return  Switch1;
        }
        else{
            return Switch2;
        }
        
        
    }
}