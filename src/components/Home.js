import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import fetchIncidents from '../redux/actions/fetchIncidentsAction';

class Home extends Component {
  componentDidMount () {
    this.props.fetchIncidents();
  }

  render () {
    const { incidents } = this.props;

    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="flag-content">
              <h1>Recent Incidents</h1>
              {
                incidents.map(incident => (
                  <div key={incident.incident_id}>
                    <div className="col span_1_of_3">
                      <div className="flag-card">
                        <img width="100" height="200" src={incident.images} />
                        <p className="card-title">{incident.comment.substr(0, 60) + '...'}</p>
                        <p className="card-desc">{incident.incident_type}</p>
                        <a href="#" className="btn-readmore">Read More</a>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  fetchIncidents: PropTypes.func
};

const mapStateToProps = state => state.incidentsReducer;

export default connect(mapStateToProps, { fetchIncidents })(Home);
