import ConvertUnits from './components/ConvertUnits';
import ConvertHex from './components/ConvertHex';
import ConvertSHA3 from './components/ConvertSHA3';
import UnitReference from './components/UnitReference';
import RecoverPK from './components/RecoverPK';
import ENSDebug from './components/ENSDebug';

import TabSection from 'containers/TabSection';
import React, { Component } from 'react';
import { Switch, Route, Redirect, RouteComponentProps } from 'react-router';
import SubTabs from 'components/SubTabs';
import { RouteNotFound } from 'components/RouteNotFound';

const tabs = [
  {
    path: 'convert-units',
    name: 'Convert Eth Units'
  },
  {
    path: 'ens-debug',
    name: 'ENS Debugger'
  },
  {
    path: 'convert-hex',
    name: 'Convert Dec <-> Hex'
  },
  {
    path: 'convert-sha3',
    name: 'Convert To SHA3'
  },
  {
    path: 'unit-reference',
    name: 'Ether Unit Reference'
  },
  {
    path: 'recover-pk',
    name: 'Mistyped Private Key'
  }
];

export default class Helpers extends Component<RouteComponentProps<{}>> {
  public render() {
    const { match, location, history } = this.props;
    const currentPath = match.url;

    return (
      <TabSection isUnavailableOffline={true}>
        <SubTabs tabs={tabs} match={match} location={location} history={history} />
        <section className="Tab-content">
          <div className="">
            <Switch>
              <Route
                exact={true}
                path={currentPath}
                render={() => (
                  <Redirect from={`${currentPath}`} to={`${currentPath}/convert-units`} />
                )}
              />
              <Route exact={true} path={`${currentPath}/convert-units`} component={ConvertUnits} />
              <Route exact={true} path={`${currentPath}/ens-debug`} component={ENSDebug} />
              <Route exact={true} path={`${currentPath}/convert-hex`} component={ConvertHex} />
              <Route exact={true} path={`${currentPath}/convert-sha3`} component={ConvertSHA3} />
              <Route
                exact={true}
                path={`${currentPath}/unit-reference`}
                component={UnitReference}
              />
              <Route exact={true} path={`${currentPath}/recover-pk`} component={RecoverPK} />
              <RouteNotFound />
            </Switch>
          </div>
        </section>
      </TabSection>
    );
  }
}
