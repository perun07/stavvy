import { storiesOf } from '@storybook/react';
import * as React from 'react';
import OrderTimeline from '../order_timeline/order_timeline';
const statuses = ['Opened', 'Accepted by Vendor', 'Order in Progress', 'Completed'];
const excludeStatus = [statuses[0]];
storiesOf("HorizontalNonLinearStepper", module)
.add('current status in exclude status', () => <OrderTimeline statuses={statuses} excludeStatus={excludeStatus} currentStatus={statuses[0]}/>)
.add('current status is not in excluded status & is the first status', () =><OrderTimeline statuses={statuses} excludeStatus={excludeStatus} currentStatus={statuses[1]}/>)
.add('timeline renders to current status and fills in progress', () =><OrderTimeline statuses={statuses} excludeStatus={excludeStatus} currentStatus={statuses[2]}/>)
.add('current status is Completed', () =><OrderTimeline statuses={statuses} excludeStatus={excludeStatus} currentStatus={statuses[3]}/>)
