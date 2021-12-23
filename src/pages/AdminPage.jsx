import { Col, Row } from "antd";
import React from "react";
import AddBrandModal from "../components/AddBrandModal/AddBrandModal";
import AddProductModal from "../components/AddProductModal/AddProductModal";
import AdminBrandsList from "../components/AdminBrandsList/AdminBrandsList";
import AdminProductsList from "../components/AdminProductsList/AdminProductsList";

const AdminPage = () => {
  return (
    <div className="container" style={{marginTop:"15px",flexWrap:"wrap"}}>
      <Row>
        <Col span={24}>
          <Col span={24}>
            <AddBrandModal />
            <AdminBrandsList />
          </Col>
        </Col>
        </Row>
        <br />
        <Row>
        <Col span={24}>
          <Col span={24}>
            <div>
            <AddProductModal />
            <AdminProductsList />
            </div>
          </Col>
        </Col>
      </Row>
    </div>
  );
};

export default AdminPage;
