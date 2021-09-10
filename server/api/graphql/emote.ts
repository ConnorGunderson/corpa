import { objectType, extendType, nonNull, stringArg, intArg, arg } from 'nexus'

export const Emote = objectType({
  name: 'Emote',
  definition(t) {
    t.model.id()
    t.model.name()
    t.model.count()
    t.model.gif()
  },
})

export const EmoteQueries = extendType({
  type: 'Query',
  definition(t) {
    t.crud.emote()
    t.crud.emotes()
  },
})

export const EmoteMutations = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneEmote()
    t.crud.updateOneEmote()
    t.crud.deleteOneEmote()
    t.field('incrementOneEmote', {
      type: 'Emote',
      args: { name: nonNull(stringArg()), gif: nonNull(stringArg()) },
      async resolve(_, args, ctx) {
        if (
          await ctx.prisma.emote.findFirst({
            where: {
              name: args.name,
            },
          })
        ) {
          return ctx.prisma.emote.update({
            where: {
              name: args.name,
            },
            data: {
              count: {
                increment: 1,
              },
            },
          })
        } else {
          return ctx.prisma.emote.create({
            data: {
              name: args.name,
              gif: args.gif,
              count: 1,
            },
          })
        }
      },
    })
  },
})
