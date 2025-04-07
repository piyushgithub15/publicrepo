const axios = require('axios');

async function fetchs() {
  try {
    const response = await axios.get('https://api.on-demand.io/plugin/v1/admin/moderation/list?page=1&limit=100');
    console.log(response.data.data.plugins,"line 6")
    return response.data.data.plugins;
  } catch (error) {
    console.error('Error fetching plugins:', error);
    return [];
  }
}

async function approve(plugin) {
  const data = {
    pluginDbId: plugin.id, 
    approve: true,
  };

  try {
    const response = await axios.post(
      'https://api.on-demand.io/plugin/v1/admin/moderation/moderate',
      data,
      {
        headers: {
          'x-user-id': '667d29d32ef99846dfb9333d', 
          'Content-Type': 'application/json',
        },
      }
    );
    console.log(` ${plugin.id}, ${plugin.name}, ${plugin.pluginId}`);
  } catch (error) {
    console.error(`Failed to approve plugin: ${plugin.id}, ${plugin.name}`, error);
  }
}

async function moderates() {
  const plugins = await fetchs();

  for (const plugin of plugins) {
    try {
      if (plugin.pluginModeration.moderationHistory[0].status === 'approved') {
        await approve(plugin);
      }
    } catch (error) {
      console.error(`Error processing plugin: ${plugin.id}, ${plugin.name}`, error);
    }
  }
}

// Run the moderation script
moderates();

66e42eb0e4faad68796047d8, Movie, plugin-1726230192
66e42ec1ae80d120ec8d43af, Rohit, plugin-1726230209
66e42f3ae4faad68796047eb, Crops Info, plugin-1726230330
66e42f94ae80d120ec8d43be, healthbased, plugin-1726230420
66e42e90e4faad68796047d2, Pearl, plugin-1726230160
66e43041ae80d120ec8d43c2, HealthCare, plugin-1726230593
66e43216cd995181dd68d205, Indian Constitution, plugin-1726231062
66e43235cd995181dd68d20a, Constitution, plugin-1726231093
66e42e5ae4faad68796047cc, GEN_Med, plugin-1726230106
66e41ad4cd995181dd68d19a, Energy, plugin-1726225108
66e43735e4faad6879604803, Health Buddy, plugin-1726232373
66e41affcd995181dd68d1a0, THIS, plugin-1726225151
66e435b7cd995181dd68d221, Travel Sphere, plugin-1726231991
66e43b3031fe601a50017159, TROJANS, plugin-1726233392
66e4446490541defda3bd495, GOVERNMENT SCHEMES, plugin-1726235748
66e43bccae80d120ec8d43c6, Kundali, plugin-1726233548
66e447d852ab186b0471e25c, tech95, plugin-1726236632
66e4494852ab186b0471e25e, Amazon, plugin-1726237000
66e41eae31fe601a50017119, Bca syllabus, plugin-1726226094
66e449cf60af735b8e5385b8, AyurVedaAi, plugin-1726237135
66e44c3d60af735b8e5385c2, PatientReport, plugin-1726237757
66e4377bcd995181dd68d237, Programming_Copilot, plugin-1726232443
66e44aa660af735b8e5385bf, AAPKA SAATHI, plugin-1726237350
66e45e7790541defda3bd4bf, ramayan, plugin-1726242423
66e46aa958acb6aff2e37ac4, uniContent, plugin-1726245545
66e46d4e60af735b8e5385e4, Insight Detective, plugin-1726246222
66e45ea760af735b8e5385d0, dsabot, plugin-1726242471
66e47b2890541defda3bd4d7, trenz, plugin-1726249768
66e47b7e90541defda3bd4db, dsa_bot2, plugin-1726249854
66e47f5352ab186b0471e279, HabitTracking, plugin-1726250835
66e4802560af735b8e5385f2, PROGRAMMER AGENT, plugin-1726251045
66e48119ae80d120ec8d440a, chat app, plugin-1726251289
66e4822bae80d120ec8d440e, interview bot, plugin-1726251563
66e452ab58acb6aff2e37aac, QuizAgent, plugin-1726239403
66e48a2060af735b8e538607, Finance, plugin-1726253600
66e48ac252ab186b0471e286, BuyWise, plugin-1726253762
66e48b7c52ab186b0471e28b, chatapp2, plugin-1726253948
66e48b9860af735b8e53860c, TEAM TROJANS, plugin-1726253976
66e48cb390541defda3bd4e6, skill testing, plugin-1726254259
66e48ca452ab186b0471e28d, Study Management, plugin-1726254244
66e48d6c90541defda3bd4e8, GenCode, plugin-1726254444
66e44e1690541defda3bd4a9, RoadmapSathi, plugin-1726238230
66e41b89ae80d120ec8d434a, Techchat, plugin-1726225289
66e498fc90541defda3bd4ef, SecuredExam, plugin-1726257404
66e49c1f60af735b8e53861a, Diseases, plugin-1726258207
66e49d5752ab186b0471e29c, crop price prediction, plugin-1726258519
66e49cd852ab186b0471e295, Personal assistant, plugin-1726258392
66e4a16560af735b8e538620, Unstop, plugin-1726259557
66e490a9ae80d120ec8d4414, HACK_RECOMMEND, plugin-1726255273
66e4aaf190541defda3bd4f8, Fashion, plugin-1726262001
66e4ad8d90541defda3bd4fa, Learn with Me, plugin-1726262669
66e4b36fae80d120ec8d4425, Packages, plugin-1726264175
66e4b5d252ab186b0471e2aa, physics, plugin-1726264786
66e4bb9152ab186b0471e2b0, Crop production, plugin-1726266257
66e4c5d060af735b8e538630, Learning Path, plugin-1726268880
66e4a24b52ab186b0471e2a1, Diseases, plugin-1726259787
66e4cc6358acb6aff2e37afc, VibeShare, plugin-1726270563
66e4cd1690541defda3bd505, Crop Price Agent, plugin-1726270742
66e4d0d3ae80d120ec8d4434, Programming Helper, plugin-1726271699
66e4d91e58acb6aff2e37b00, crop health, plugin-1726273822
66e49c0860af735b8e538617, stufoods, plugin-1726258184
66e41ad3ae80d120ec8d4340, programmer krishna, plugin-1726225107
66e5042058acb6aff2e37b0f, On-demand-bot, plugin-1726284832
66e50a7452ab186b0471e2d3, Grammer Bee, plugin-1726286452
66e5085a52ab186b0471e2d1, Uni Content, plugin-1726285914
66e41c6bae80d120ec8d4369, Silica, plugin-1726225515
66e51c4890541defda3bd51c, CV Analyser, plugin-1726291016
66e51cb790541defda3bd51f, Universe Explorer, plugin-1726291127
66e51ff5ae80d120ec8d4442, Mental Health Trainer, plugin-1726291957
66e53a4b60af735b8e538653, CatchUp, plugin-1726298699
66e54148ae80d120ec8d4447, Crop Recommendation, plugin-1726300488
66e5455958acb6aff2e37b1b, Plant disease detection, plugin-1726301529
66e729c058acb6aff2e37b4a, wipro, plugin-1726425536
66e792c2ae80d120ec8d4477, mentor, plugin-1726452418
66e42e8831fe601a50017129, world cup, plugin-1726230152
66e5780a60af735b8e53865f, #vibez, plugin-1726314506
66e5730b90541defda3bd530, AskMeAnythin, plugin-1726313227
66e914db58acb6aff2e37b7b, orentation, plugin-1726551259
