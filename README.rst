=======================
North_Sea_Visualisation
=======================

The history of the North Sea, using d3

---------------
Getting started
---------------

Clone the repository

Use python to create a local server (or any other tool).

::

    $ python -m http.server

Then open up a localhost on port 8000 (default for python) in your browser.

    http://localhost:8000/.../North_Sea_Visualisation/

---------------
Design Approach
---------------

Following exploratory data analysis of the North Sea NPD dataset
the approach is to create a martini glass style visualisation.

The author driven narrative part will demonstrate that overtime resources are
not being replenished at the same rate on the North Sea.

The viewer driver narrative will allow for exploring the data themselves
by interacting and viewing the data by each year.

^^^^^^^^^^^^^^^^^^^^^^^^
Initial design decisions
^^^^^^^^^^^^^^^^^^^^^^^^^

The initial design choice is a choropleth map.

Areas will be shaded to show a proportion of remaining resources.
The areas are based on field outlines/license blocks. Which will
work in a similar way as states in the USA would work.

This will then be modified by animation per year.

The layout will consist of a rectangular map around Norway. As Norway
is elongated North to South the rectangle will be elongated down the page.
This could be supplimented by additional graphs as a sidebar to the main map,
this should be put on hold until further into the design process.

Simple legends will be used to display the scales of shading.

Annotations will emerge to highlight key aspects during the author driven
narrative section.

The expectation is this will show a visual display of how resource quantaties
vary over the years to deliver a narrative.

^^^^^^^^
Feedback
^^^^^^^^^

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Visualisation development process
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

----
Data
----

Shapefiles for the North Sea were obtanied from the `NPD <http://factpages.npd.no/ReportServer?/FactPages/geography/geography_all&rc:Toolbar=false&IpAddress=1&CultureCode=en>`_

The datum of the geometry of the Shapefile is European Datum 1950 (ED50, 
spatial reference ID is EPSG:4230).

These were taken as shapefiles and converted to GeoJson using the Ogre portal.

The coastlines are taken from the European Environment Agency.

`European Coastlines <https://www.eea.europa.eu/data-and-maps/data/eea-coastline-for-analysis-1/gis-data/europe-coastline-shapefile>`_

`Norway Coastlines <https://www.eea.europa.eu/data-and-maps/data/eea-reference-grids-2/gis-files/norway-shapefile>`_

-------
Wrap-up
-------


^^^^^^^^^
Resources
^^^^^^^^^

`Google JavaScript Style Guide <https://google.github.io/styleguide/jsguide.html>`_

To convert shape file to GeoJson `Ogre <http://ogre.adc4gis.com/>`_

