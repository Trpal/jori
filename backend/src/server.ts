// tslint:disable-next-line:no-var-requires
require('dotenv').config();
import dotenv from 'dotenv';
import app from './app';

const port = process.env.PORT || 4040;
app.listen(port, () => {
  console.log('Express server listening on port ' + port);
});
