"use client";

import { useState } from "react";
import { motion } from "motion/react";

const activities = [
  {
    id: 1,
    title: "Dance & Music",
    icon: "🎵",
    description:
      "To encourage children to develop an interest in music, group and individual classes are held for songs and instruments. Music plays a significant role in cognitive development and our learners are enthusiastic about their music and dance skills.",
    highlights: [
      "Group Classes",
      "Individual Lessons",
      "Cognitive Development",
    ],
    color: "from-purple-600 to-pink-600",
  },
  {
    id: 2,
    title: "Karate",
    icon: "🥋",
    description:
      "Learning Karate is beneficial to the children as it helps them to show respect for their instructor as well as their opponents. Building discipline and confidence through martial arts training.",
    highlights: ["Discipline", "Respect", "Confidence Building"],
    color: "from-orange-600 to-red-600",
  },
  {
    id: 3,
    title: "Physical Sports",
    icon: "⚽",
    description:
      "To ensure that children are exposed to a variety of experiences, we have a full-fledged plan for physical sports for all classes including basketball, volleyball, cricket, and football.",
    highlights: ["Multiple Sports", "Team Building", "Physical Fitness"],
    color: "from-green-600 to-teal-600",
  },
  {
    id: 4,
    title: "French Language",
    icon: "🗣️",
    description:
      "Children learning an additional language are more creative and perform better when they are asked to solve complex problems. Enhance cognitive abilities through multilingual education.",
    highlights: ["Language Skills", "Cultural Awareness", "Creative Thinking"],
    color: "from-blue-600 to-indigo-600",
  },
  {
    id: 5,
    title: "Yoga",
    icon: "🧘",
    description:
      "Practicing yoga has numerous positive benefits for children. It helps them to build concentration, increase their confidence, and improve their self-image through mindful practice.",
    highlights: ["Concentration", "Mental Wellness", "Self-Confidence"],
    color: "from-emerald-600 to-green-600",
  },
  {
    id: 6,
    title: "Theatre Arts",
    icon: "🎭",
    description:
      "Introduction to Dance, Music, and Drama are considered essential tools to build confidence in children and increase their experiential learning and creative expression.",
    highlights: ["Creative Expression", "Confidence", "Performance Skills"],
    color: "from-red-600 to-pink-600",
  },
  {
    id: 7,
    title: "STEAMS",
    icon: "🔬",
    description:
      "A unique STEAMS curriculum combining Science, Technology, Engineering, Art, Mathematics, and Sports. Equip students with 21st-century skills through hands-on learning experiences.",
    highlights: ["STEM Education", "Innovation", "Future Ready"],
    color: "from-cyan-600 to-blue-600",
  },
];

const ActivityCard = ({
  activity,
  index,
}: {
  activity: (typeof activities)[0];
  index: number;
}) => {
  const [hoveredCard, setHoveredCard] = useState(false);

  return (
    <motion.div
      key={activity.id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      onMouseEnter={() => setHoveredCard(true)}
      onMouseLeave={() => setHoveredCard(false)}
      className="group h-full"
    >
      <motion.div
        whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(220, 38, 38, 0.2)" }}
        className="relative h-full bg-card rounded-2xl p-8 border border-red-900/20 overflow-hidden cursor-pointer"
      >
        {/* Gradient Background Animation */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${activity.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
          animate={hoveredCard ? { scale: 1.1 } : { scale: 1 }}
          transition={{ duration: 0.3 }}
        />

        {/* Content */}
        <div className="relative z-10">
          {/* Icon Animation */}
          <motion.div
            animate={
              hoveredCard ? { scale: 1.2, rotate: 5 } : { scale: 1, rotate: 0 }
            }
            transition={{ duration: 0.3 }}
            className="text-5xl mb-4"
          >
            {activity.icon}
          </motion.div>

          {/* Title with underline animation */}
          <motion.div className="mb-3 overflow-hidden">
            <h3 className="text-2xl font-bold text-foreground">
              {activity.title}
            </h3>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "40px" }}
              transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
              viewport={{ once: true }}
              className="h-1 bg-gradient-to-r from-red-600 to-red-400 rounded-full mt-2"
            />
          </motion.div>

          {/* Description */}
          <p className="text-muted-foreground text-sm leading-relaxed mb-6">
            {activity.description}
          </p>

          {/* Highlights with stagger animation */}
          <motion.div className="flex flex-wrap gap-2 mb-6">
            {activity.highlights.map((highlight, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 + idx * 0.05 }}
                viewport={{ once: true }}
                className="text-xs bg-red-900/20 text-red-300 px-3 py-1 rounded-full border border-red-800/30"
              >
                {highlight}
              </motion.span>
            ))}
          </motion.div>

          {/* Read More Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative overflow-hidden px-6 py-2 rounded-lg bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold text-sm group/btn"
          >
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-600"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative">Read More</span>
          </motion.button>
        </div>

        {/* Animated Border */}
        <motion.div
          className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-red-600 to-red-400 bg-clip-border"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 0.5 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  );
};

export default function CoCurricularActivities() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Elements */}
      <motion.div
        className="absolute -top-40 -right-40 w-80 h-80 bg-red-600 rounded-full opacity-5 blur-3xl"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
      />
      <motion.div
        className="absolute -bottom-40 -left-40 w-80 h-80 bg-red-600 rounded-full opacity-5 blur-3xl"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-5xl sm:text-6xl font-bold text-foreground mb-4"
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
          >
            Co-Curricular Activities
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Holistic development through diverse learning experiences
          </motion.p>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-red-600 to-red-400 rounded-full mx-auto mt-4"
          />
        </motion.div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <ActivityCard key={activity.id} activity={activity} index={index} />
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-6">
            Discover how our co-curricular programs enrich student development
          </p>
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-red-600/20 transition-all duration-300"
          >
            Explore All Programs
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
