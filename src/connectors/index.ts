import { config } from '../constants/config';
import { database } from '../../knexfile';

export const knex = require('knex')(database[config.evironment]);

