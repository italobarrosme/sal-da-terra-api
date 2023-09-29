/**
 * bible service
 */

import { factories } from '@strapi/strapi';
import axios from 'axios';

export default factories.createCoreService('api::bible.bible', () => ({
  async populate(params) {
    console.log('PARAMS', params);

    const serviceCreateBooks = async (books) => {
      for (const item of books) {
        console.log('BOOK', item.book);
        await strapi.service('api::bible.bible').create({
          data: {
            book: item.book,
          }
        });
      }
    }

    const { data } = await axios.get('https://www.abibliadigital.com.br/api/books');

    const books = data.map((item) => {
      
      return {
        book: item.name,
      }
    });

    serviceCreateBooks(books)
    
    return {
      status: 'ok',
      message: 'Bible populated',
    };
  },
}));
