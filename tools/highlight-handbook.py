"""Make a highlighted copy of the handbook PDF and an index for the app.
Usage: python -I highlight_pdf.py PYLIB IN_PDF OUT_PLAIN OUT_HIGHLIGHTED OUT_INDEX_JS"""
import json, shutil, sys
sys.path.insert(0, sys.argv[1])
import pymupdf

src, out_plain, out_hl, out_js = sys.argv[2:6]
K = [  # (topic, phrase to find, alternative shorter phrase)
 ('Permits and licenses', 'Be at least 15½ years old.', None),
 ('Permits and licenses', 'Practice driving for at least 50 hours', None),
 ('Permits and licenses', 'Between 11 p.m. and 5 a.m. during the first 12 months', None),
 ('Permits and licenses', 'You are allowed three attempts to pass before you must reapply.', 'three attempts'),
 ('Signals, horn, headlights', 'It is illegal to wear a headset or earplugs in both ears while driving.', 'earplugs in both ears'),
 ('Signals, horn, headlights', 'At least 100 feet before you turn.', None),
 ('Signals, horn, headlights', 'At least five seconds before you change lanes on a freeway.', None),
 ('Signals, horn, headlights', 'within 500 feet of a vehicle coming toward you', None),
 ('Signals, horn, headlights', 'within 300 feet of a vehicle you are following', None),
 ('Signals, horn, headlights', 'you must turn on your low-beam headlights', None),
 ('Lane markings', 'Do not pass over double solid yellow lines.', None),
 ('Lane markings', 'Turning left across a single set of double yellow lines to enter or exit a driveway or private road or make a U-turn.', 'single set of double yellow lines'),
 ('Lane markings', 'Two sets of solid double yellow lines spaced two or more feet apart are considered a barrier.', 'considered a barrier'),
 ('Lane markings', 'A broken yellow line indicates you may pass if the broken line is next to your driving lane.', None),
 ('Lane markings', 'Never change lanes over double solid white lines.', None),
 ('Lane markings', 'You may only drive for 200 feet in the center left turn lane.', None),
 ('Lane markings', 'five or more vehicles following you', None),
 ('Lane markings', 'Turning (within 200 feet of an intersection).', 'within 200 feet of an intersection'),
 ('Turns', 'You may turn right at a red light after a complete stop unless there is a No Turn on Red sign.', None),
 ('Turns', 'You may not turn right if you are stopped at a red arrow light.', None),
 ('Turns', 'Keep your wheels pointed straight ahead until it is safe to start your turn.', None),
 ('Turns', 'In a residential district if no vehicles are approaching you within 200 feet.', None),
 ('Turns', 'When you cannot see clearly for 200 feet in each direction.', None),
 ('Freeways and passing', 'Highway traffic has the right-of-way.', None),
 ('Freeways and passing', 'signal five seconds (approximately 400 feet) before you exit', None),
 ('Freeways and passing', 'Half a block on city streets, which is about 150 feet.', None),
 ('Freeways and passing', 'A full block on the highway, which is about 300 feet.', None),
 ('Freeways and passing', 'Within 100 feet of an intersection, bridge, tunnel, railroad crossing, or other hazardous area.', None),
 ('Freeways and passing', 'at least one-third of a mile ahead', None),
 ('Parking', 'Headed downhill: Turn your front wheels into the curb or right toward the side of the road.', 'Headed downhill'),
 ('Parking', 'Headed uphill: Turn your front wheels away from the curb', 'Headed uphill'),
 ('Parking', 'Turn the wheels to the right so the vehicle will roll away from the center of the road if the brakes fail.', None),
 ('Parking', 'within 18 inches of the curb', None),
 ('Parking', 'White: Stop only long enough to pick up or drop off passengers.', None),
 ('Parking', 'Green: Park for a limited time.', None),
 ('Parking', 'Yellow: Load and unload passengers and freight.', None),
 ('Parking', 'Red: No stopping, standing, or parking.', None),
 ('Parking', 'Blue: Parking for a disabled person', None),
 ('Parking', 'Within 15 feet of a fire hydrant or fire station driveway.', None),
 ('Parking', 'Within 20 feet of an unmarked or marked crosswalk', None),
 ('Parking', 'Within three feet of a sidewalk ramp for disabled persons.', None),
 ('Traffic signals', 'A flashing red signal light means STOP. After stopping, you may go when it is safe.', 'After stopping, you may go when it is safe.'),
 ('Traffic signals', 'If you cannot stop safely, cautiously cross the intersection.', None),
 ('Traffic signals', 'You do not need to stop.', None),
 ('Traffic signals', 'A red arrow means STOP.', None),
 ('Traffic signals', 'stop as if the intersection is controlled by STOP signs in all directions', None),
 ('Traffic signals', 'Drivers must yield to pedestrians, even if the Don’t Walk light is flashing.', 'Drivers must yield to pedestrians'),
 ('Right-of-way', 'give the right-of-way to the vehicle, pedestrian, or bicyclist on your right', None),
 ('Right-of-way', 'on the through road (continuing to go straight) have the right-of-way', None),
 ('Right-of-way', 'Yield to all traffic already in the roundabout.', None),
 ('Right-of-way', 'Travel in a counterclockwise direction.', None),
 ('Right-of-way', 'Pedestrians using guide dogs or white canes have the right-of-way at all times.', None),
 ('Right-of-way', 'the vehicle facing uphill has the right-of-way', None),
 ('Sharing the road', 'If you cannot see the truck’s side mirrors, the truck driver cannot see you.', 'the truck driver cannot see you'),
 ('Sharing the road', 'you may pass at no more than 10 mph', None),
 ('Sharing the road', 'Allow a safe three-second following distance.', None),
 ('Sharing the road', 'Drive to the right edge of the road and stop until the emergency vehicle(s) have passed.', 'Drive to the right edge of the road and stop'),
 ('Sharing the road', 'It is against the law to follow within 300 feet', None),
 ('Sharing the road', 'allow at least three feet between your vehicle and the bicyclist', None),
 ('Sharing the road', 'Wear a helmet (if under 18 years old).', None),
 ('School buses and children', 'The speed limit is 25 mph within 500 feet of a school', None),
 ('School buses and children', 'you must stop from either direction until the children are safely across the street', None),
 ('School buses and children', 'If the school bus is on the other side of a divided or multilane highway', None),
 ('Speed limits', 'The speed limit for a blind intersection is 15 mph.', None),
 ('Speed limits', 'The speed limit in an alley is 15 mph.', None),
 ('Speed limits', 'The speed limit is 15 mph within 100 feet of a railroad crossing', None),
 ('Speed limits', 'The speed limit is 25 mph, unless otherwise posted.', None),
 ('Speed limits', 'you may never drive faster than is safe for the current road conditions', None),
 ('Speed limits', 'most California highways is 65 mph', None),
 ('Speed limits', '55 mph on a two-lane undivided highway', None),
 ('Railroad crossings', 'stop at least 15 feet from the nearest track', None),
 ('Railroad crossings', 'until the red lights stop flashing, even if the gate rises', None),
 ('Railroad crossings', 'Never stop on the railroad tracks.', None),
 ('Railroad crossings', 'Run away from the tracks diagonally in the direction the train is coming from.', None),
 ('Following distance and conditions', 'scan the road at least 10 seconds ahead', None),
 ('Following distance and conditions', 'Use the three-second rule', None),
 ('Following distance and conditions', 'Wet road: Reduce your speed by 5 to 10 mph.', None),
 ('Following distance and conditions', 'Packed snow: Reduce your speed by half.', None),
 ('Following distance and conditions', 'Ice: Reduce your speed to no more than 5 mph.', None),
 ('Following distance and conditions', 'it is not safe to drive faster than 30 mph', None),
 ('Following distance and conditions', 'Turn the steering wheel in the direction of the skid.', None),
 ('Following distance and conditions', 'Use your low-beam headlights. High-beam headlights will reflect back and cause glare.', None),
 ('Following distance and conditions', 'Increase your following distance.', None),
 ('Safety equipment', 'Ride at least 10 inches from the airbag cover', 'at least 10 inches'),
 ('Safety equipment', 'leave a child who is six years old or younger unattended', None),
 ('Safety equipment', 'Children who are 8 years old or older, or at least 4 feet 9 inches tall', None),
 ('Safety equipment', 'Driving while using a handheld cell phone is unsafe and illegal.', None),
 ('Safety equipment', 'Minors may use a cell phone to make a call for emergency assistance.', 'call for emergency assistance'),
 ('Alcohol and drugs', '0.08% or higher if you are over 21 years old.', None),
 ('Alcohol and drugs', '0.01% or higher if you are under 21 years old.', None),
 ('Alcohol and drugs', '0.01% or higher at any age if you are on DUI probation.', None),
 ('Alcohol and drugs', 'vehicle that requires a commercial driver’s license', None),
 ('Alcohol and drugs', 'you must keep the container in the trunk or place where passengers do not sit', None),
 ('Alcohol and drugs', 'DMV will suspend or revoke your driving privilege for one year', None),
 ('Alcohol and drugs', 'within 10 days from the date of your arrest', None),
 ('Alcohol and drugs', 'All DUI convictions remain on your driver’s record for 10 years.', None),
 ('Insurance and collisions', '$30,000 for a single death or injury.', None),
 ('Insurance and collisions', '$60,000 for death or injury to more than one person.', None),
 ('Insurance and collisions', '$15,000 for property damage.', None),
 ('Insurance and collisions', 'you must report it to DMV within 10 days', None),
 ('Insurance and collisions', 'within 24 hours of the collision', None),
 ('Insurance and collisions', '4 points in 12 months.', None),
]

shutil.copyfile(src, out_plain)
doc = pymupdf.open(src)
labels = [doc[i].get_label() or str(i + 1) for i in range(doc.page_count)]
index, missing = [], []
for topic, phrase, alt in K:
    hit = None
    for p in (phrase, alt):
        if not p:
            continue
        for i in range(doc.page_count):
            quads = doc[i].search_for(p, quads=True)
            if quads:
                hit = (i, p, quads); break
        if hit:
            break
    if not hit:
        missing.append(phrase); continue
    i, used, quads = hit
    page = doc[i]  # keep a reference so the annotation stays bound to the page
    a = page.add_highlight_annot(quads[0] if len(quads) == 1 else quads)
    a.set_colors(stroke=(1, 0.86, 0.2)); a.set_info(title='CA Driver Test Practice', content='Important for the knowledge test: ' + topic)
    a.update()
    index.append({'topic': topic, 'text': phrase, 'page': i + 1, 'label': labels[i]})
first = doc[0]
note = first.add_text_annot((40, 40), 'Yellow highlights were added by the CA Driver Test Practice app to mark important rules. They are not part of the official DMV handbook. '
                             'California Driver’s Handbook, California Department of Motor Vehicles, licensed under CC BY-NC 4.0.')
note.set_info(title='CA Driver Test Practice'); note.update()
doc.save(out_hl, garbage=3, deflate=True)
with open(out_js, 'w', encoding='utf-8') as f:
    f.write('/* Generated by highlight_pdf.py: important handbook passages and the PDF page they are on. */\n')
    f.write('window.HANDBOOK = ' + json.dumps({'edition': 'DL 600 R6/2025 (PDF dated 2025-08-11)', 'pages': doc.page_count,
             'highlights': index}, ensure_ascii=False, indent=1) + ';\n')
print(f'highlighted {len(index)} of {len(K)}')
for m in missing:
    print('  NOT FOUND:', m)
