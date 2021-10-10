import Orphanages from '../models/Ophanages';
import images_views from './images_views';
import imagesViews from './images_views';

export default {
    render(orphanages: Orphanages){
        return {
            id: orphanages.id,
            name: orphanages.name,
            latitude: orphanages.latitude,
            longitude: orphanages.longitude,
            about: orphanages.about,
            instructions: orphanages.instructions,
            opening_hours: orphanages.opening_hours,
            open_on_weekends: orphanages.open_on_weekends,
            images: images_views.renderMany(orphanages.images)
        };
    },

    renderMany(orphanages: Orphanages[]){
        return orphanages.map(orphanage => this.render(orphanage));
    }
}