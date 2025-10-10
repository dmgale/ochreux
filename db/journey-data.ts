import { UserMap } from '../app/(root)/journey/columns'

const journeyData: UserMap[] = [
  {
    id: 'repeat-purchaser-app',
    userSegment: 'Repeat Purchaser',
    channel: 'App',
    realiseHunger: {
      action: 'App notification/routine',
      painPoint: 'Distracted',
      emotion: 'Natural, slightly bored',
    },
    considerOptions: {
      action: 'Selects usual from favorites',
      painPoint: 'Usual item is unavailable',
      emotion: 'Confident, automatic',
    },
    checkTimeBudget: {
      action: 'Quick glance at schedule in app',
      painPoint: 'App lags (slow), or price confusion',
      emotion: 'Rushed',
    },
    researchChoose: {
      action: 'Skips menu research, orders usual',
      painPoint: 'None',
      emotion: 'Satisfied',
    },
    orderPurchase: {
      action: 'One-tap reorder',
      painPoint: 'Payment issues / failure',
      emotion: 'Confident, frustrated',
    },
    waitPrep: {
      action: 'Tracks order via app',
      painPoint: 'Late / Delivery delays',
      emotion: 'Neutral, impatient',
    },
    eat: {
      action: 'Eats at desk',
      painPoint: 'Desk interruptions, routine fatigue',
      emotion: 'Neutral, low-energy',
    },
    returnToWork: {
      action: 'App reminder, quick return to refocus',
      painPoint: 'Post-lunch fatigue',
      emotion: 'Re-focused, tired',
    },
  },
  {
    id: 'repeat-purchaser-instore',
    userSegment: 'Repeat Purchaser',
    channel: 'In-Store',
    realiseHunger: {
      action: 'Physical cue (feels hungry), habitual routine (same shop)',
      painPoint: 'Forgets wallet',
      emotion: 'Impatient, routine',
    },
    considerOptions: {
      action: 'Walks to same shop/cafe',
      painPoint: 'Noisy/crowded environment',
      emotion: 'Content, chatty',
    },
    checkTimeBudget: {
      action: 'Checks wallet/calendar',
      painPoint: 'Late, short or no break (busy schedule), no cash/card',
      emotion: 'Routine, pressured',
    },
    researchChoose: {
      action: 'Skips menu research, orders usual at counter',
      painPoint: 'Out of favorite/ usual menu item',
      emotion: 'Routine',
    },
    orderPurchase: {
      action: 'Orders same meal in person at counter',
      painPoint: 'Long queue',
      emotion: 'Chatty, impatient',
    },
    waitPrep: {
      action: 'Waits in queue',
      painPoint: 'Noise/social distraction',
      emotion: 'Social, bored',
    },
    eat: {
      action: 'Eats in staffroom/café',
      painPoint: 'Interruptions, noisy environment',
      emotion: 'Relaxed, content',
    },
    returnToWork: {
      action: 'Solo/group return',
      painPoint: 'Sluggish/fatigue return',
      emotion: 'Refocused, drowsey',
    },
  },
  {
    id: 'variety-seeker-app',
    userSegment: 'Variety Seeker',
    channel: 'App',
    realiseHunger: {
      action: 'App/calendar prompt',
      painPoint: 'Indecision',
      emotion: 'Curious, restless',
    },
    considerOptions: {
      action: 'Scrolls menus and deals in app',
      painPoint: 'Too many choices',
      emotion: 'Curious, indecisive',
    },
    checkTimeBudget: {
      action: 'Seeks app deals/special prices',
      painPoint: 'Confusing, Unavailable deals',
      emotion: 'Optimistic, deal-seaking',
    },
    researchChoose: {
      action: 'Reads reviews, compares items',
      painPoint: 'Confusing, overloaded or complex menu',
      emotion: 'Excited, overwhelmed',
    },
    orderPurchase: {
      action: 'Orders new menu in app, customizes',
      painPoint: 'Payment issues / failure',
      emotion: 'Curious, frustrated',
    },
    waitPrep: {
      action: 'Tracks delivery status via app',
      painPoint: 'Late / Delivery delays',
      emotion: 'Hopeful, restless',
    },
    eat: {
      action: 'Eats at desk or outdoors',
      painPoint: 'Eating alone',
      emotion: 'Variable, reflective',
    },
    returnToWork: {
      action: 'Shares review/ feedback, refocuses',
      painPoint: 'Focus drop-off',
      emotion: 'Neutral, tired',
    },
  },
  {
    id: 'variety-seeker-instore',
    userSegment: 'Variety Seeker',
    channel: 'In-Store',
    realiseHunger: {
      action: 'Group discussion or suggestion',
      painPoint: 'Decision fatigue',
      emotion: 'Anticipatory',
    },
    considerOptions: {
      action: 'Discuss and compares with group',
      painPoint: 'Competing preferences',
      emotion: 'Social, unsure',
    },
    checkTimeBudget: {
      action: 'Group checks schedule for time/budget',
      painPoint: 'Scheduling conflicts',
      emotion: 'Social, anxious',
    },
    researchChoose: {
      action: 'Asks staff, browses physical menu',
      painPoint: 'Limited choices',
      emotion: 'Engaged, inquisitive',
    },
    orderPurchase: {
      action: 'Orders new at counter',
      painPoint: 'Group indecision at checkout',
      emotion: 'Social, uncertian',
    },
    waitPrep: {
      action: 'Waits/ socialises in queue',
      painPoint: 'Long queues/ distractions',
      emotion: 'Social, chatty',
    },
    eat: {
      action: 'Eats with group in staffroom or outdoors',
      painPoint: 'Noisy/ crowded eating environment, bad weather',
      emotion: 'Social, happy',
    },
    returnToWork: {
      action: 'Group return, post-lunch chat',
      painPoint: 'Group fatigue/ slowness',
      emotion: 'Social, sluggish',
    },
  },
]
export default journeyData
