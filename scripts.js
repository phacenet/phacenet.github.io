document.addEventListener('DOMContentLoaded', () => {
  const menuLinks = document.querySelectorAll('.menu a');
  const gallery = document.querySelector('.gallery');

  menuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const category = e.target.getAttribute('data-category');
      loadGallery(category);
    });
  });

  function loadGallery(category) {
    // Here you can fetch the data for the selected category
    // For now, we'll use a simple object with arrays as an example
    const data = {
      'main-programs': [
        {
          title: 'Knee Ability Zero',
          imageUrl: 'https://i.imgur.com/6LRNK5R.jpg',
          workoutUrl: 'workout1.html'
        },
        {
          title: 'Back Ability Zero',
          imageUrl: 'https://i.imgur.com/xxSWgAx.jpg',
          workoutUrl: 'workout2.html'
        },
        {
          title: 'ATG Basics',
          imageUrl: 'https://i.imgur.com/1XQQsai.jpg',
          workoutUrl: 'workout3.html'
        },
        {
          title: 'Dense Strength',
          imageUrl: 'https://i.imgur.com/bo09kwB.jpg',
          workoutUrl: 'workout4.html'
        },
        {
          title: 'Male Standards',
          imageUrl: 'https://i.imgur.com/nZN0skZ.jpg',
          workoutUrl: 'workout5.html'
        },
        {
          title: 'ATG Pro',
          imageUrl: 'https://i.imgur.com/i9g5OPh.jpg',
          workoutUrl: 'workout6.html'
        },
        // Add more workouts as needed
      ],

      'sport': [
        {
          title: 'ATG For Distance',
          imageUrl: 'https://i.imgur.com/qBO43wc.jpg',
          workoutUrl: 'workout7.html'
        },
        {
          title: 'Dense For Speed',
          imageUrl: 'https://i.imgur.com/rngxE5Y.jpg',
          workoutUrl: 'workout8.html'
        },
        {
          title: 'Speed Standards',
          imageUrl: 'https://i.imgur.com/6pIsQh5.jpg',
          workoutUrl: 'workout9.html'
        },
      ],

      'protocols': [
        {
          title: 'Ankle',
          imageUrl: 'https://i.imgur.com/hwbNVBB.jpg',
          workoutUrl: 'workout10.html'
        },
        {
          title: 'Shoulder',
          imageUrl: 'https://i.imgur.com/dVQPMWo.jpg',
          workoutUrl: 'workout11.html'
        },
        {
          title: 'Wrist',
          imageUrl: 'https://i.imgur.com/UIaA9GG.jpg',
          workoutUrl: 'workout12.html'
        },
        {
          title: 'Elbow',
          imageUrl: 'https://i.imgur.com/gbtWCv1.jpg',
          workoutUrl: 'workout13.html'
        },
        {
          title: 'Groin',
          imageUrl: 'https://i.imgur.com/OJnU15V.jpg',
          workoutUrl: 'workout14.html'
        },
        {
          title: 'Shin',
          imageUrl: 'https://i.imgur.com/9bGkAwp.jpg',
          workoutUrl: 'workout15.html'
        },
        {
          title: 'Foot',
          imageUrl: 'https://i.imgur.com/cMOFNFc.jpg',
          workoutUrl: 'workout16.html'
        },
        {
          title: 'Hip',
          imageUrl: 'https://i.imgur.com/mkERGiq.jpg',
          workoutUrl: 'workout17.html'
        },
        {
          title: 'Plantar Fascitis',
          imageUrl: 'https://my.clevelandclinic.org/-/scassets/images/org/health/articles/14709-plantar-fasciitis.jpg',
          workoutUrl: 'PlantarFascitis.html'
        },
      ],

      'mobility': [
        {
          title: 'Gym Mobility',
          imageUrl: 'https://i.imgur.com/VlxaK4F.jpg',
          workoutUrl: 'workout18.html'
        },
        {
          title: 'Home Mobility',
          imageUrl: 'https://i.imgur.com/4HJR2HU.jpg',
          workoutUrl: 'workout19.html'
        },
      ],

      'hunter': [
        {
          title: 'Pull',
          imageUrl: 'https://yt3.ggpht.com/NE1ze8dmkkP2cV_282eagHBz2OWPILmEETv4vgTG-qHqSN5vY5MdSIh8ShXd3pBn8TmhNj6Q3s5mng=s640-nd-v1',
          workoutUrl: 'Pull.html'
        },
        {
          title: 'Push',
          imageUrl: 'https://openseauserdata.com/files/7fd89ca688de0a516c261ce8419ed845.gif',
          workoutUrl: 'Push.html'
        },
        {
          title: 'Apnea Tables',
          imageUrl: 'https://yt3.ggpht.com/SNY_EDGMDHT8x8gaLbzwdb_PN8qicma8wQk2CGD21FiP1getGIpOAZGrjJDXzA0-_0SPmVZNBZMr=s640-nd-v1',
          workoutUrl: 'Tables.html'
        },

      ],

      'physique': [
        {
          title: 'ATG Muscle',
          imageUrl: 'https://i.imgur.com/1oNqKfZ.jpg',
          workoutUrl: 'workout20.html'
        },
        {
          title: 'ATG Shred Phase 1',
          imageUrl: 'https://i.imgur.com/I5IuW2b.jpg',
          workoutUrl: 'workout21.html'
        },
        {
          title: 'ATG Shred Phase 2',
          imageUrl: 'https://i.imgur.com/blq0waG.jpg',
          workoutUrl: 'workout22.html'
        },
        {
          title: 'Home Shred',
          imageUrl: 'https://i.imgur.com/ygB4CEn.jpg',
          workoutUrl: 'workout23.html'
        },
        {
          title: "Ben's Personal Shred",
          imageUrl: 'https://i.imgur.com/V2R4J4s.jpg',
          workoutUrl: 'workout24.html'
        },
        {
          title: 'ATG-Style PHA',
          imageUrl: 'https://i.imgur.com/3XCOQed.jpg',
          workoutUrl: 'workout25.html'
        },
      ],

      'longevity': [
        {
          title: 'ATG For Longevity',
          imageUrl: 'https://i.imgur.com/vEFlrYH.jpg',
          workoutUrl: 'ATG For Longevity.html'
        },

      ],

      'swim': [
        {
          title: 'Swim Workout 1',
          imageUrl: 'https://people.com/thmb/XOlLAELumvdCVziMzkwzJ5eyD0Y=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(791x292:793x294)/jinx-1-983129e029a34b9b8a806895cd7c2181.jpg',
          workoutUrl: 'SwimWorkout1.html'
        },
        {
          title: 'Swim Workout 2',
          imageUrl: 'https://assets3.thrillist.com/v1/image/3005223/792x816/scale;webp=auto;jpeg_quality=60.jpg',
          workoutUrl: 'SwimWorkout2.html'
        },

      ],

      'hero': [
        {
          title: 'MURPH',
          imageUrl: 'https://i.shgcdn.com/8193030c-15da-486d-8fe0-1318413edd40/-/format/auto/-/preview/3000x3000/-/quality/lighter/',
          workoutUrl: 'MURPH.html'
        },


      ],


      // Add more categories as needed
    };

    // Clear the gallery
    gallery.innerHTML = '';

    // Check if the category exists in the data object
    if (data[category]) {
      // Create gallery items based on data
      data[category].forEach(item => {
        const galleryItem = document.createElement('div');
        galleryItem.classList.add('gallery-item');
        galleryItem.innerHTML = `
          <img src="${item.imageUrl}" alt="${item.title}">
          <div class="overlay">${item.title}</div>
        `;
        galleryItem.addEventListener('click', () => {
          window.location.href = item.workoutUrl;
        });
        gallery.appendChild(galleryItem);
      });
    }
  }
});
